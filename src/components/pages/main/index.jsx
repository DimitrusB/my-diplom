import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetAllAds, refreshToken } from "../../../api/api";
import * as S from "./main.style";
import * as A from "../../assets/style";
import { UsersAdComp } from "../../forms/UsersAd";
import { ReactComponent as SpinAnimation } from "../../assets/Spin-0.9s-301px.svg";

export const Main = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState([]);
  const baseImagePath = "http://localhost:8090/";
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [userAdEmpty, setUserAdEmpty] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
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
      })
      .finally(() => setLoading(false));
  }, []);

  

  useEffect(() => {
    const tokenRefreshInterval = setInterval(() => {
      refreshToken();
    }, 60000);
    return () => clearInterval(tokenRefreshInterval);
  }, []);

  const ClickEnterAuth = () => {
    if (!userData) {
      navigate("/auth");
    } else {
      navigate("/profile");
    }
  };

  if (loading) {
    return (
      <A.animSet>
        <SpinAnimation />
      </A.animSet>
    );
  }

  return (
    <S.StyledMain>
      <S.Wrapper>
        <S.Container>
          <S.Header>
            <S.Header__nav>
              <S.Mainenter onClick={ClickEnterAuth}>
                Вход в личный кабинет
              </S.Mainenter>
            </S.Header__nav>
          </S.Header>
          <main>
            <S.Main_search>
              <S.Search__logoLink href="#" target="_blank">
                <S.Search__logoImg src="img/logo.png" alt="logo" />
              </S.Search__logoLink>
              <S.Search__logoMobLink href="#" target="_blank">
                <S.Search__logoMobImg src="img/logo-mob.png" alt="logo" />
              </S.Search__logoMobLink>
              <S.Search__form action="#">
                <S.Search__text
                  type="search"
                  placeholder="Поиск по объявлениям"
                  name="search"
                />
                <S.Search__textMob
                  type="search"
                  placeholder="Поиск"
                  name="search-mob"
                />
                <S.Search__btn>Найти</S.Search__btn>
              </S.Search__form>
            </S.Main_search>
            <S.Maincontainer>
              <S.MainH2>Объявления</S.MainH2>
              <UsersAdComp
                userAdEmpty={userAdEmpty}
                baseImagePath={baseImagePath}
                userAd={values}
              />
            </S.Maincontainer>
          </main>

          <S.Footer>
            <S.Footer__container>
              <S.Footer__Img>
                <a href="" target="_self">
                  <S.Footer__img src="img/icon_01.png" alt="home" />
                </a>
              </S.Footer__Img>
              <S.Footer__Img>
                <a href="" target="_self">
                  <S.Footer__img src="img/icon_02.png" alt="home" />
                </a>
              </S.Footer__Img>
              <S.Footer__Img>
                <a href="" target="_self">
                  <S.Footer__img src="img/icon_03.png" alt="home" />
                </a>
              </S.Footer__Img>
            </S.Footer__container>
          </S.Footer>
        </S.Container>
      </S.Wrapper>
    </S.StyledMain>
  );
};
