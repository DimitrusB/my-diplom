import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetAllAds } from "../../../api/api";
import {
  getAllAdsFailure,
  getAllAdsRequest,
  getAllAdsSuccess,
} from "../../store/actions/actions";
import * as S from "./main.style";

export const Main = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState([]);

  useEffect(() => {
    GetAllAds()
      .then((data) => {
        setValues(data);
      })
      .catch((error) => {
        console.error('Ошибка при получении данных:', error);
      });
  }, []);

  // const dispatch = useDispatch();
  // const ads = useSelector((state) => state.ads);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     dispatch(getAllAdsRequest());
  //     try {
  //       const data = await GetAllAds();
  //       dispatch(getAllAdsSuccess(data));
  //     } catch (error) {
  //       console.error("Ошибка при получении данных:", error);
  //       dispatch(getAllAdsFailure(error));
  //     }
  //   };

  //   fetchData();
  // }, [dispatch]);

  // if (!ads || ads.length === 0) {
  //   return (<p>Нет данных для отображения</p>);
  // }

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
                <S.Cards>
                  {values &&
                    values.map((item, index) => (
                      <S.Cards__item key={index}>
                        <S.Cards__card>
                          <S.Card__image>
                            <a href="#" target="_blank">
                              <S.CardImage src={item.images} alt="picture" />
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
                  {/* 
                  <S.Cards__item>
                    <S.Cards__card>
                      <S.Card__image>
                        <a href="#" target="_blank">
                          <S.CardImage src="#" alt="picture" />
                        </a>
                      </S.Card__image>
                      <div>
                        <a href="" target="_blank">
                          <S.Card__title>
                            Ракетка для большого тенниса Triumph Pro ST
                          </S.Card__title>
                        </a>
                        <S.Card__price>2&nbsp;200&nbsp;₽</S.Card__price>
                        <S.Card__place>Санкт Петербург</S.Card__place>
                        <S.Card__date>Сегодня в&nbsp;10:45</S.Card__date>
                      </div>
                    </S.Cards__card>
                  </S.Cards__item>

                  <S.Cards__item>
                    <S.Cards__card>
                      <S.Card__image>
                        <a href="#" target="_blank">
                          <S.CardImage src="#" alt="picture" />
                        </a>
                      </S.Card__image>
                      <div>
                        <a href="" target="_blank">
                          <S.Card__title>
                            Ракетка для большого тенниса Triumph Pro ST
                          </S.Card__title>
                        </a>
                        <S.Card__price>2&nbsp;200&nbsp;₽</S.Card__price>
                        <S.Card__place>Санкт Петербург</S.Card__place>
                        <S.Card__date>Сегодня в&nbsp;10:45</S.Card__date>
                      </div>
                    </S.Cards__card>
                  </S.Cards__item> */}
                  {/* 
                  <S.Cards__item>
                    <S.Cards__card>
                      <S.Card__image>
                        <a href="#" target="_blank">
                          <S.CardImage src="#" alt="picture" />
                        </a>
                      </S.Card__image>
                      <div>
                        <a href="" target="_blank">
                          <S.Card__title>
                            Ракетка для большого тенниса Triumph Pro ST
                          </S.Card__title>
                        </a>
                        <S.Card__price>2&nbsp;200&nbsp;₽</S.Card__price>
                        <S.Card__place>Санкт Петербург</S.Card__place>
                        <S.Card__date>Сегодня в&nbsp;10:45</S.Card__date>
                      </div>
                    </S.Cards__card>
                  </S.Cards__item>

                  <S.Cards__item>
                    <S.Cards__card>
                      <S.Card__image>
                        <a href="#" target="_blank">
                          <S.CardImage src="#" alt="picture" />
                        </a>
                      </S.Card__image>
                      <div>
                        <a href="" target="_blank">
                          <S.Card__title>
                            Ракетка для большого тенниса Triumph Pro ST
                          </S.Card__title>
                        </a>
                        <S.Card__price>2&nbsp;200&nbsp;₽</S.Card__price>
                        <S.Card__place>Санкт Петербург</S.Card__place>
                        <S.Card__date>Сегодня в&nbsp;10:45</S.Card__date>
                      </div>
                    </S.Cards__card>
                  </S.Cards__item>

                  <S.Cards__item>
                    <S.Cards__card>
                      <S.Card__image>
                        <a href="#" target="_blank">
                          <S.CardImage src="#" alt="picture" />
                        </a>
                      </S.Card__image>
                      <div>
                        <a href="" target="_blank">
                          <S.Card__title>
                            Ракетка для большого тенниса Triumph Pro ST
                          </S.Card__title>
                        </a>
                        <S.Card__price>2&nbsp;200&nbsp;₽</S.Card__price>
                        <S.Card__place>Санкт Петербург</S.Card__place>
                        <S.Card__date>Сегодня в&nbsp;10:45</S.Card__date>
                      </div>
                    </S.Cards__card>
                  </S.Cards__item>

                  <S.Cards__item>
                    <S.Cards__card>
                      <S.Card__image>
                        <a href="#" target="_blank">
                          <S.CardImage src="#" alt="picture" />
                        </a>
                      </S.Card__image>
                      <div>
                        <a href="" target="_blank">
                          <S.Card__title>
                            Ракетка для большого тенниса Triumph Pro ST
                          </S.Card__title>
                        </a>
                        <S.Card__price>2&nbsp;200&nbsp;₽</S.Card__price>
                        <S.Card__place>Санкт Петербург</S.Card__place>
                        <S.Card__date>Сегодня в&nbsp;10:45</S.Card__date>
                      </div>
                    </S.Cards__card>
                  </S.Cards__item>

                  <S.Cards__item>
                    <S.Cards__card>
                      <S.Card__image>
                        <a href="#" target="_blank">
                          <S.CardImage src="#" alt="picture" />
                        </a>
                      </S.Card__image>
                      <div>
                        <a href="" target="_blank">
                          <S.Card__title>
                            Ракетка для большого тенниса Triumph Pro ST
                          </S.Card__title>
                        </a>
                        <S.Card__price>2&nbsp;200&nbsp;₽</S.Card__price>
                        <S.Card__place>Санкт Петербург</S.Card__place>
                        <S.Card__date>Сегодня в&nbsp;10:45</S.Card__date>
                      </div>
                    </S.Cards__card>
                  </S.Cards__item>

                  <S.Cards__item>
                    <S.Cards__card>
                      <S.Card__image>
                        <a href="#" target="_blank">
                          <S.CardImage src="#" alt="picture" />
                        </a>
                      </S.Card__image>
                      <div>
                        <a href="" target="_blank">
                          <S.Card__title>
                            Ракетка для большого тенниса Triumph Pro ST
                          </S.Card__title>
                        </a>
                        <S.Card__price>2&nbsp;200&nbsp;₽</S.Card__price>
                        <S.Card__place>Санкт Петербург</S.Card__place>
                        <S.Card__date>Сегодня в&nbsp;10:45</S.Card__date>
                      </div>
                    </S.Cards__card>
                  </S.Cards__item>

                  <S.Cards__item>
                    <S.Cards__card>
                      <S.Card__image>
                        <a href="#" target="_blank">
                          <S.CardImage src="#" alt="picture" />
                        </a>
                      </S.Card__image>
                      <div>
                        <a href="" target="_blank">
                          <S.Card__title>
                            Ракетка для большого тенниса Triumph Pro ST
                          </S.Card__title>
                        </a>
                        <S.Card__price>2&nbsp;200&nbsp;₽</S.Card__price>
                        <S.Card__place>Санкт Петербург</S.Card__place>
                        <S.Card__date>Сегодня в&nbsp;10:45</S.Card__date>
                      </div>
                    </S.Cards__card>
                  </S.Cards__item> */}
                </S.Cards>
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
