import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GetAllAds } from "../../api/api";
import { AddNewAd } from "../../components/forms/addNewAt";

import * as A from "../../components/assets/style";
import * as S from "../profile/profile.style";
import { UsersAdComp } from "../../components/forms/UsersAd";
import { ReactComponent as SpinAnimation } from "../../components/assets/Spin-0.9s-301px.svg";
import { FooterComp } from "../../components/forms/footer";

export const SellersProfilePage = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const { itemUser } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState([]);
  const [userAdEmpty, setUserAdEmpty] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const baseImagePath = "http://localhost:8090/";
  const [error, setError] = useState(null);
  const [userAds, setUserAds] = useState([]);
  const avatarUrl = userAds.length > 0 ? userAds[0].user.avatar : null;
  const city = userAds.length > 0 ? userAds[0].user.city : null;
  const name = userAds.length > 0 ? userAds[0].user.name : null;
  const phone = userAds.length > 0 ? userAds[0].user.phone : null;
  const sells_from = userAds.length > 0 ? userAds[0].user.sells_from : null;
  const [numberUser, setNumberUser] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleButtonViewPhone = () => {
    setNumberUser(false);
  };

  const handleButtonClick = () => {
    if (userData) {
      setModalVisible(true);
    } else {
      navigate("/auth");
    }
  };

  useEffect(() => {
    setLoading(true);
    GetAllAds()
      .then((data) => {
        setValues(data);

        const filteredUserAds = data.filter((ad) => ad.user.id == itemUser);
        setUserAds(filteredUserAds);

        if (filteredUserAds.length === 0) {
          setUserAdEmpty(true);
        } else {
          setUserAdEmpty(false);
        }
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [itemUser]);

  if (loading) {
    return (
      <A.animSet>
        <SpinAnimation />
      </A.animSet>
    );
  }

  const ClickEnterAuth = () => {
    if (!userData) {
      navigate("/auth");
    } else {
      navigate("/profile");
    }
  };

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
                    <S.Logo__MobImg
                      src={`${process.env.PUBLIC_URL}/img/logo-mob.png`}
                      alt="logo"
                    />
                  </Link>
                </S.Logo__MobLink>
              </S.Header__Logo>
              <>
                <S.Header__BtnputAd onClick={handleButtonClick}>
                  Разместить объявление
                </S.Header__BtnputAd>
              </>
              <S.Header__BtnLk onClick={ClickEnterAuth}>
                Личный кабинет
              </S.Header__BtnLk>
            </S.Header__nav>
          </S.Header>

          <main>
            <S.Maincontainer>
              <S.Main__CenterBlock>
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
                      <S.Menu__Btn>Вернуться на&nbsp;главную</S.Menu__Btn>
                    </Link>
                  </S.Menu__Form>
                </S.Main__Menu>

                <S.MainH2>Профиль продавца</S.MainH2>

                <S.Main__Profile>
                  <S.Profile__Content>
                    <S.Main__Title></S.Main__Title>
                    <S.Profile__Settings>
                      <S.Settings__Left>
                        <S.Settings__Img>
                          <img src={baseImagePath + avatarUrl} alt="" />
                        </S.Settings__Img>
                      </S.Settings__Left>
                      <S.Settings__Right>
                        <S.Settings__FnameSeller>
                          {name}
                        </S.Settings__FnameSeller>
                        <S.Settings__CitySeller>{city}</S.Settings__CitySeller>
                        <S.Settings__InfSeller>
                          Продает товары с {sells_from}
                        </S.Settings__InfSeller>
                        <S.Article__btn onClick={handleButtonViewPhone}>
                          <div>Показать телефон</div>
                          <span>
                            {numberUser
                              ? (phone?.slice(0, -7) ?? "") + "ХХХ ХХ ХХ"
                              : phone}
                          </span>
                        </S.Article__btn>
                      </S.Settings__Right>
                    </S.Profile__Settings>
                  </S.Profile__Content>
                </S.Main__Profile>

                <S.Main__Title>Товары продавца</S.Main__Title>
              </S.Main__CenterBlock>
              <UsersAdComp
                userAdEmpty={userAdEmpty}
                baseImagePath={baseImagePath}
                userAd={userAds}
              />
            </S.Maincontainer>
          </main>

          <FooterComp ButtonClick={handleButtonClick} />
        </S.Container>
      </S.Wrapper>
    </S.StyledMain>
  );
};