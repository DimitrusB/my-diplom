import { Link } from "react-router-dom";
import * as S from "./profile.style";

export const ProfilePage = () => {
  return (
    <S.StyledMain>
      <S.Wrapper>
        <S.Container>
          <S.Header>
            <S.Header__nav>
              <S.Header__Logo>
                <S.Logo__MobLink href="" target="_blank">
                  <Link to="/">
                    <S.Logo__MobImg src="img/logo-mob.png" alt="logo" />
                  </Link>
                </S.Logo__MobLink>
              </S.Header__Logo>
              <S.Header__BtnputAd id="btputAd">
                Разместить объявление
              </S.Header__BtnputAd>
              <S.Header__BtnLk id="btnlk">Личный кабинет</S.Header__BtnLk>
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
                    <S.Menu__Btn id="btnGoBack">
                      Вернуться на&nbsp;главную
                    </S.Menu__Btn>
                  </S.Menu__Form>
                </S.Main__Menu>

                <S.MainH2>Здравствуйте, Дмитрий!</S.MainH2>

                <S.Main__Profile>
                  <S.Profile__Content>
                    <S.Main__Title>Настройки профиля</S.Main__Title>
                    <S.Profile__Settings>
                      <S.Settings__Left>
                        <S.Settings__Img>
                          <a href="" target="_self">
                            <img src="#" alt="" />
                          </a>
                        </S.Settings__Img>
                        <S.Settings__ChangePhoto href="" target="_self">
                          Заменить
                        </S.Settings__ChangePhoto>
                      </S.Settings__Left>
                      <S.Settings__Right>
                        <S.Settings__Form action="#">
                          <S.Settings__Div>
                            <label for="fname">Имя</label>
                            <S.Settings__Fname
                              id="settings-fname"
                              name="fname"
                              type="text"
                              placeholder="Имя"
                            />
                          </S.Settings__Div>

                          <S.Settings__Div>
                            <label for="lname">Фамилия</label>
                            <S.Settings__Lname
                              id="settings-lname"
                              name="lname"
                              type="text"
                              placeholder="Фамилия"
                            />
                          </S.Settings__Div>

                          <S.Settings__Div>
                            <label for="city">Город</label>
                            <S.Settings__City
                              id="settings-city"
                              name="city"
                              type="text"
                              placeholder="Город"
                            />
                          </S.Settings__Div>

                          <S.Settings__Div>
                            <label for="phone">Телефон</label>
                            <S.Settings__Phone
                              id="settings-phone"
                              name="phone"
                              type="tel"
                              placeholder="Номер телефона"
                            />
                          </S.Settings__Div>

                          <S.Settings__Btn id="settings-btn">
                            Сохранить
                          </S.Settings__Btn>
                        </S.Settings__Form>
                      </S.Settings__Right>
                    </S.Profile__Settings>
                  </S.Profile__Content>
                </S.Main__Profile>

                <S.Main__Title>Мои товары</S.Main__Title>
              </S.Main__CenterBlock>
              <S.Main__Content>
                <S.Main__ContentCards>
                  <S.Cards__Item>
                    <S.Cards__Card>
                      <S.Card__Image>
                        <a href="" target="_blank">
                          <img src="#" alt="picture" />
                        </a>
                      </S.Card__Image>
                      <div>
                        <a href="" target="_blank">
                          <S.Card__Title>
                            Ракетка для большого тенниса Triumph Pro ST
                          </S.Card__Title>
                        </a>
                        <S.Card__Price>2&nbsp;200&nbsp;₽</S.Card__Price>
                        <S.Card__Place>Санкт Петербург</S.Card__Place>
                        <S.Card__Date>Сегодня в&nbsp;10:45</S.Card__Date>
                      </div>
                    </S.Cards__Card>
                  </S.Cards__Item>

                  <S.Cards__Item>
                    <S.Cards__Card>
                      <S.Card__Image>
                        <a href="" target="_blank">
                          <img src="#" alt="picture" />
                        </a>
                      </S.Card__Image>
                      <div>
                        <a href="" target="_blank">
                          <S.Card__Title>
                            Ракетка для большого тенниса Triumph Pro ST
                          </S.Card__Title>
                        </a>
                        <S.Card__Price>2&nbsp;200&nbsp;₽</S.Card__Price>
                        <S.Card__Place>Санкт Петербург</S.Card__Place>
                        <S.Card__Date>Сегодня в&nbsp;10:45</S.Card__Date>
                      </div>
                    </S.Cards__Card>
                  </S.Cards__Item>

                  <S.Cards__Item>
                    <S.Cards__Card>
                      <S.Card__Image>
                        <a href="" target="_blank">
                          <img src="#" alt="picture" />
                        </a>
                      </S.Card__Image>
                      <div>
                        <a href="" target="_blank">
                          <S.Card__Title>
                            Ракетка для большого тенниса Triumph Pro ST
                          </S.Card__Title>
                        </a>
                        <S.Card__Price>2&nbsp;200&nbsp;₽</S.Card__Price>
                        <S.Card__Place>Санкт Петербург</S.Card__Place>
                        <S.Card__Date>Сегодня в&nbsp;10:45</S.Card__Date>
                      </div>
                    </S.Cards__Card>
                  </S.Cards__Item>

                  <S.Cards__Item>
                    <S.Cards__Card>
                      <S.Card__Image>
                        <a href="" target="_blank">
                          <img src="#" alt="picture" />
                        </a>
                      </S.Card__Image>
                      <div>
                        <a href="" target="_blank">
                          <S.Card__Title>
                            Ракетка для большого тенниса Triumph Pro ST
                          </S.Card__Title>
                        </a>
                        <S.Card__Price>2&nbsp;200&nbsp;₽</S.Card__Price>
                        <S.Card__Place>Санкт Петербург</S.Card__Place>
                        <S.Card__Date>Сегодня в&nbsp;10:45</S.Card__Date>
                      </div>
                    </S.Cards__Card>
                  </S.Cards__Item>

                  <S.Cards__Item>
                    <S.Cards__Card>
                      <S.Card__Image>
                        <a href="" target="_blank">
                          <img src="#" alt="picture" />
                        </a>
                      </S.Card__Image>
                      <div>
                        <a href="" target="_blank">
                          <S.Card__Title>
                            Ракетка для большого тенниса Triumph Pro ST
                          </S.Card__Title>
                        </a>
                        <S.Card__Price>2&nbsp;200&nbsp;₽</S.Card__Price>
                        <S.Card__Place>Санкт Петербург</S.Card__Place>
                        <S.Card__Date>Сегодня в&nbsp;10:45</S.Card__Date>
                      </div>
                    </S.Cards__Card>
                  </S.Cards__Item>

                  <S.Cards__Item>
                    <S.Cards__Card>
                      <S.Card__Image>
                        <a href="" target="_blank">
                          <img src="#" alt="picture" />
                        </a>
                      </S.Card__Image>
                      <div>
                        <a href="" target="_blank">
                          <S.Card__Title>
                            Ракетка для большого тенниса Triumph Pro ST
                          </S.Card__Title>
                        </a>
                        <S.Card__Price>2&nbsp;200&nbsp;₽</S.Card__Price>
                        <S.Card__Place>Санкт Петербург</S.Card__Place>
                        <S.Card__Date>Сегодня в&nbsp;10:45</S.Card__Date>
                      </div>
                    </S.Cards__Card>
                  </S.Cards__Item>
                </S.Main__ContentCards>
              </S.Main__Content>
            </S.Maincontainer>
          </main>

          <S.Footer>
            <S.Footer__Container>
              <S.Footer__Img>
                <a href="" target="_self">
                  <img src="img/icon_01.png" alt="home" />
                </a>
              </S.Footer__Img>
              <S.Footer__Img>
                <a href="" target="_self">
                  <img src="img/icon_02.png" alt="home" />
                </a>
              </S.Footer__Img>
              <S.Footer__Img>
                <a href="" target="_self">
                  <img src="img/icon_03.png" alt="home" />
                </a>
              </S.Footer__Img>
            </S.Footer__Container>
          </S.Footer>
        </S.Container>
      </S.Wrapper>
    </S.StyledMain>
  );
};