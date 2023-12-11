import { Link, useNavigate, useParams } from "react-router-dom";
import * as S from "./adPage.style";
import { deleteAd, GetAdsByID, refreshToken } from "../../../api/api";
import { useEffect, useState } from "react";

export const AdPage = () => {
  const { itemId } = useParams();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();
  const [values, setValues] = useState([]);
  const baseImagePath = "http://127.0.0.1:8090/";
  const [selectedImage, setSelectedImage] = useState("");
  const [myAdPage, setMyAdPage] = useState(false);


  useEffect(() => {
    const tokenRefreshInterval = setInterval(() => {
      refreshToken();
    }, 60000);
    return () => clearInterval(tokenRefreshInterval);
  }, []);

  useEffect(() => {
    GetAdsByID(itemId)
      .then((data) => {
        setValues(data);
        if (data && data.images && data.images.length > 0) {
          setSelectedImage(data.images[0].url);
        }
        if (userData?.email === data?.user?.email) {
          setMyAdPage(true);
        }
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);

  const handleDeleteAd = () => {
    deleteAd(itemId);
    navigate("/profile");
  }

  const handleImageClick = (url) => {
    setSelectedImage(url); // Update the selectedImage when an image is clicked
  };

  if (!values) {
    return <h1>Loading...</h1>;
  }

  const ClickEnterAuth = () => {

    if (!userData) {
      navigate("/auth"); 
    } else {
      navigate("/profile");
  };
}

  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <S.Header__nav>
            <S.Header__Logo>
              <S.Logo__MobLink href="" target="_blank">
                <S.Logo__MobImg
                  src={`${process.env.PUBLIC_URL}/img/logo-mob.png`}
                  alt="logo"
                />
              </S.Logo__MobLink>
            </S.Header__Logo>
            <S.Header__BtnputAd>Разместить объявление</S.Header__BtnputAd>
            <S.Header__BtnLk onClick={ClickEnterAuth}>Личный кабинет</S.Header__BtnLk>
          </S.Header__nav>
        </S.Header>

        <main>
          <S.Maincontainer>
            <S.Main__Menu>
              <S.Menu__LogoLink>
                <Link to="/">
                  <S.Menu__LogoImg
                    src={`${process.env.PUBLIC_URL}/img/logo.png`}
                    alt="logo"
                  />
                </Link>
              </S.Menu__LogoLink>
              <S.Menu__Form>
                <Link to="/">
                  <S.Menu__Btn>Вернуться на главную</S.Menu__Btn>
                </Link>
              </S.Menu__Form>
            </S.Main__Menu>
          </S.Maincontainer>

          <S.Main__artic>
            <S.Artic__content>
              <S.Article__left>
                <S.Article__fillImg>
                  <S.Article__img>
                    <img
                      src={
                        selectedImage
                          ? baseImagePath + selectedImage
                          : "path/to/placeholder.png"
                      }
                      alt="Selected ad"
                    />{" "}
                  </S.Article__img>

                  <S.Article__imgBar>
                    {values &&
                      values.images &&
                      values.images.map((item, index) => (
                        <S.Article__imgBarDiv
                          key={item.id}
                          onClick={() => handleImageClick(item.url)}
                        >
                          <img
                            src={baseImagePath + item.url}
                            alt={item.alt || "Ad image"}
                          />
                        </S.Article__imgBarDiv>
                      ))}
                  </S.Article__imgBar>

                  <S.Article__imgBarMob>
                    <S.imgBarMob__circle_active></S.imgBarMob__circle_active>
                    <S.imgBarMob__circle></S.imgBarMob__circle>
                    <S.imgBarMob__circle></S.imgBarMob__circle>
                    <S.imgBarMob__circle></S.imgBarMob__circle>
                    <S.imgBarMob__circle></S.imgBarMob__circle>
                  </S.Article__imgBarMob>
                </S.Article__fillImg>
              </S.Article__left>
              {values && (
                <S.Article__right>
                  <S.Article__block>
                    <S.Article__title>{values.title}</S.Article__title>
                    <S.Article__info>
                      <S.Article__date>
                        {values.created_on?.split("T")[0]}
                      </S.Article__date>
                      <S.Article__city>{values.user?.city}</S.Article__city>
                      <S.Article__link href="" target="_blank" rel="">
                        23 отзыва
                      </S.Article__link>
                    </S.Article__info>
                    <S.Article__price>{values.price} ₽</S.Article__price>
                    {!myAdPage ? (
                      <S.Article__btn>
                        Показать&nbsp;телефон
                        <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                      </S.Article__btn>
                    ) : (
                      <S.Article__btnDiv>
                        <S.Article__btn>
                          <span>Редактировать</span>
                        </S.Article__btn>
                        <S.Article__btn onClick={handleDeleteAd}>
                          <span>Снять с публикации</span>
                        </S.Article__btn>
                      </S.Article__btnDiv>
                    )}
                    <S.Article__author>
                      <S.Author__img>
                        <img src={baseImagePath + values.user?.avatar} alt="" />
                      </S.Author__img>
                      <S.Author__cont>
                        <S.Author__name>{values.user?.name}</S.Author__name>
                        <S.Author__about>
                          Продает товары с{" "}
                          {values.user?.sells_from.split("T")[0]}
                        </S.Author__about>
                      </S.Author__cont>
                    </S.Article__author>
                  </S.Article__block>
                </S.Article__right>
              )}
            </S.Artic__content>
          </S.Main__artic>

          <S.Maincontainer>
            <S.Main__title>Описание товара</S.Main__title>
            <S.Main__content>
              <S.Main__text>{values.description}</S.Main__text>
            </S.Main__content>
          </S.Maincontainer>
        </main>

        <S.Footer>
          <S.Footer__Container>
            <S.Footer__Img>
              <Link to="/">
                <img
                  src={`${process.env.PUBLIC_URL}/img/icon_01.png`}
                  alt="home"
                />
              </Link>
            </S.Footer__Img>
            <S.Footer__Img>
              <Link to={userData ? "/" : "#"}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/icon_02.png`}
                  alt="add"
                />
              </Link>
            </S.Footer__Img>
            <S.Footer__Img>
              <Link to="#">
                <img
                  src={`${process.env.PUBLIC_URL}/img/icon_03.png`}
                  alt="home"
                />
              </Link>
            </S.Footer__Img>
          </S.Footer__Container>
        </S.Footer>
      </S.Container>
    </S.Wrapper>
  );
};
