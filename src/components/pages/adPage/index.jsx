import { Link } from "react-router-dom";
import * as S from "./adPage.style";

export const AdPage = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <S.Header__nav>
            <S.Header__Logo>
              <S.Logo__MobLink href="" target="_blank">
                <S.Logo__MobImg src="img/logo-mob.png" alt="logo" />
              </S.Logo__MobLink>
            </S.Header__Logo>
            <S.Header__BtnputAd>
              Разместить объявление
            </S.Header__BtnputAd>
            <S.Header__BtnLk id="btnlk">
              Личный кабинет
            </S.Header__BtnLk>
          </S.Header__nav>
        </S.Header>

        <main class="main">
          <S.Maincontainer>
            <S.Main__Menu>
              <S.Menu__LogoLink href="" target="_blank">
                <S.Menu__LogoImg src="img/logo.png" alt="logo" />
              </S.Menu__LogoLink>
              <S.Menu__Form action="#">
                <S.Menu__Btn id="btnGoBack">
                  Вернуться на главную
                </S.Menu__Btn>
              </S.Menu__Form>
            </S.Main__Menu>
          </S.Maincontainer>

          <S.Main__artic>
            <S.Artic__content>
              <S.Article__left>
                <S.Article__fillImg>
                  <S.Article__img>
                    <img src="" alt="" />
                  </S.Article__img>
                  <S.Article__imgBar>
                    <S.Article__imgBarDiv>
                      <img src="" alt=" " />
                    </S.Article__imgBarDiv>
                    <S.Article__imgBarDiv>
                      <img src="" alt="" />
                    </S.Article__imgBarDiv>
                    <S.Article__imgBarDiv>
                      <img src="" alt="" />
                    </S.Article__imgBarDiv>
                    <S.Article__imgBarDiv>
                      <img src="" alt="" />
                    </S.Article__imgBarDiv>
                    <S.Article__imgBarDiv>
                      <img src="" alt="" />
                    </S.Article__imgBarDiv>
                    <S.Article__imgBarDiv>
                      <img src="" alt="" />
                    </S.Article__imgBarDiv>
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
              <S.Article__right>
                <S.Article__block>
                  <S.Article__title>
                    Ракетка для большого тенниса Triumph Pro STС Б/У
                  </S.Article__title>
                  <S.Article__info>
                    <S.Article__date>Сегодня в 10:45</S.Article__date>
                    <S.Article__city>Санкт-Петербург</S.Article__city>
                    <S.Article__link href="" target="_blank" rel="">
                      23 отзыва
                    </S.Article__link>
                  </S.Article__info>
                  <S.Article__price>2 200 ₽</S.Article__price>
                  <S.Article__btn>
                    Показать&nbsp;телефон
                    <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                  </S.Article__btn>
                  <S.Article__author>
                    <S.Author__img>
                      <img src="" alt="" />
                    </S.Author__img>
                    <S.Author__cont>
                      <S.Author__name>Кирилл</S.Author__name>
                      <S.Author__about>Продает товары с августа 2021</S.Author__about>
                    </S.Author__cont>
                  </S.Article__author>
                </S.Article__block>
              </S.Article__right>
            </S.Artic__content>
          </S.Main__artic>

          <S.Maincontainer>
            <S.Main__title>Описание товара</S.Main__title>
            <S.Main__content>
              <S.Main__text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </S.Main__text>
            </S.Main__content>
          </S.Maincontainer>
        </main>

        <S.Footer>
          <S.Footer__Container>
            <S.Footer__Img>
              <Link to="/">
                <img src="img/icon_01.png" alt="home" />
              </Link>
            </S.Footer__Img>
            <S.Footer__Img>
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
  );
};
