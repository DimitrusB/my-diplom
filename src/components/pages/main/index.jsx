import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { GetAllAds, refreshToken } from "../../../api/api";
import { UsersAdComp } from "../../UsersAd";
import * as S from "./main.style";

export const Main = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState([]);
  const baseImagePath = "http://127.0.0.1:8090/";
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [userAdEmpty, setUserAdEmpty] = useState();

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
  };
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
