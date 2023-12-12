import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetAllAds } from "../../../api/api";
import { AddNewAd } from "../../forms/addNewAt";
import { UsersAdComp } from "../../UsersAd";
import * as S from "../";

export const SellersProfilePage = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState([]);
  const [userAdEmpty, setUserAdEmpty] = useState();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
    setModalVisible(true);
  };

  const handleLogOut = () => {
    localStorage.removeItem("userData");
    navigate("/");
  };

  useEffect(() => {
    GetAllAds()
      .then((data) => {
        setValues(data);
        if (data.length === 0) {
          setUserAdEmpty(true);
        } else {
          setUserAdEmpty(false);
        }
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);

  return (
    <S.StyledMain>
      {isModalVisible && <AddNewAd onClose={() => setModalVisible(false)} />}
      <S.Wrapper>
        <S.Container>
          <S.Header>
            <S.Header__nav>
              <S.Header__Logo>
                <S.Logo__MobLink>
                  <Link to="/">
                    <S.Logo__MobImg src="img/logo-mob.png" alt="logo" />
                  </Link>
                </S.Logo__MobLink>
              </S.Header__Logo>
              <>
                <S.Header__BtnputAd onClick={handleButtonClick}>
                  Разместить объявление
                </S.Header__BtnputAd>
              </>
              <S.Header__BtnLk>Личный кабинет</S.Header__BtnLk>
            </S.Header__nav>
          </S.Header>

          <main>
            <S.Maincontainer>
              <S.Main__CenterBlock>
                <S.Main__Menu>
                  <S.Menu__LogoLink>
                    <Link to="/">
                      <S.Menu__LogoImg src="img/logo.png" alt="logo" />
                    </Link>
                  </S.Menu__LogoLink>
                  <S.Menu__Form action="#">
                    <Link to="/">
                      <S.Menu__Btn>Вернуться на&nbsp;главную</S.Menu__Btn>
                    </Link>
                  </S.Menu__Form>
                </S.Main__Menu>

                <S.MainH2>Здравствуйте, {savedUserData.name}!</S.MainH2>

                <S.Main__Profile>
                  <S.Profile__Content>
                    <S.Main__Title>Настройки профиля</S.Main__Title>
                    <S.Profile__Settings>
                      <S.Settings__Left>
                        <S.Settings__Img>
                          <img
                            src={baseImagePath + savedUserData.avatar}
                            alt=""
                          />
                        </S.Settings__Img>
                        <div>
                          <input
                            type="file"
                            ref={inputRef}
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                          />
                        </div>
                        <S.Settings__ChangePhoto
                          type="file"
                          onClick={() => inputRef.current.click()}
                        >
                          Заменить
                        </S.Settings__ChangePhoto>
                      </S.Settings__Left>
                      <EditUserData />
                    </S.Profile__Settings>
                  </S.Profile__Content>
                </S.Main__Profile>

                <S.Main__Title>Мои товары</S.Main__Title>
              </S.Main__CenterBlock>
              <UsersAdComp />
            </S.Maincontainer>
          </main>

          <S.Footer>
            <S.Footer__Container>
              <S.Footer__Img>
                <Link to="/">
                  <img src="img/icon_01.png" alt="home" />
                </Link>
              </S.Footer__Img>
              <S.Footer__Img onClick={handleButtonClick}>
                <img src="img/icon_02.png" alt="home" />
              </S.Footer__Img>
              <S.Footer__Img>
                <Link to="#">
                  <img src="img/icon_03.png" alt="home" />
                </Link>
              </S.Footer__Img>
            </S.Footer__Container>
          </S.Footer>
        </S.Container>
      </S.Wrapper>
    </S.StyledMain>
  );
};
