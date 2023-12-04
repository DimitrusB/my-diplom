import * as S from "./main.style";

export const Main = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <S.Header__nav>
            <S.Mainenter>Вход в личный кабинет</S.Mainenter>
          </S.Header__nav>
        </S.Header>
        <main class="main">
          <S.Main_search>
            <a class="search__logo-link" href="#" target="_blank">
              <img class="search__logo-img" src="img/logo.png" alt="logo" />
            </a>
            <a class="search__logo-mob-link" href="#" target="_blank">
              <img
                class="search__logo-mob-img"
                src="img/logo-mob.png"
                alt="logo"
              />
            </a>
            <S.Search__form action="#">
              <S.Search__text
                type="search"
                placeholder="Поиск по объявлениям"
                name="search"
              />
              <input
                class="search__text-mob"
                type="search"
                placeholder="Поиск"
                name="search-mob"
              />
              <button class="search__btn btn-hov02">Найти</button>
            </S.Search__form>
          </S.Main_search>
          <S.Maincontainer>
            <S.MainH2>Объявления</S.MainH2>

            <div class="Maincontent">
              <S.Cards>
                <S.Cards__item>
                  <S.Cards__card>
                    <S.Card__image>
                      <a href="#" target="_blank">
                        <S.CardImage src="#" alt="picture" />
                      </a>
                    </S.Card__image>
                    <div class="card__content">
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
                    <div class="card__content">
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
                    <div class="card__content">
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
                    <div class="card__content">
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
                    <div class="card__content">
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
                    <div class="card__content">
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
                    <div class="card__content">
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
                    <div class="card__content">
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
                    <div class="card__content">
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
                    <div class="card__content">
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
              </S.Cards>
            </div>
          </S.Maincontainer>
        </main>

        <S.Footer>
          <div class="footer__container">
            <div class="footer__img">
              <a href="" target="_self">
                <img src="img/icon_01.png" alt="home" />
              </a>
            </div>
            <div class="footer__img">
              <a href="" target="_self">
                <img src="img/icon_02.png" alt="home" />
              </a>
            </div>
            <div class="footer__img">
              <a href="" target="_self">
                <img src="img/icon_03.png" alt="home" />
              </a>
            </div>
          </div>
        </S.Footer>
      </S.Container>
    </S.Wrapper>
  );
};
