import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { GetAllAds } from "../../../api/api";
import * as S from "./main.style";

export const Main = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState([]);
  const baseImagePath = "http://127.0.0.1:8090/";

  useEffect(() => {
    GetAllAds()
      .then((data) => {
        setValues(data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);

  const ClickEnterAuth = () => {
    navigate("/auth");
  };

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

              <S.Maincontent>
                {values && values.length > 0 && (
                  <S.Cards>
                    {values &&
                      values.map((item, index) => (
                        <S.Cards__item key={index}>
                          <S.Cards__card>
                            <S.Card__image>
                              <a href="#" target="_blank">
                                {item.images.length > 0 && (
                                  <S.CardImage
                                    key={0}
                                    src={baseImagePath + item.images[0].url}
                                    alt={`Image ${item.title}`}
                                  />
                                )}
                              </a>
                            </S.Card__image>

                            <div>
                              <a href="" target="_blank">
                                <S.Card__title>{item.title}</S.Card__title>
                              </a>
                              <S.Card__price>{item.price} ₽</S.Card__price>
                              <S.Card__place key={index}>
                                {item.user.city}
                              </S.Card__place>
                              <S.Card__date>{item.created_on}</S.Card__date>
                            </div>
                          </S.Cards__card>
                        </S.Cards__item>
                      ))}
                  </S.Cards>
                )}
              </S.Maincontent>
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
