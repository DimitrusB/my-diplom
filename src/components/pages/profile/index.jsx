import { Link, useNavigate } from "react-router-dom";
import * as S from "./profile.style";
import { useEffect, useState } from "react";
import {
  FetchUserAvatar,
  GetUserAd,
  GetUserData,
  refreshToken,
} from "../../../api/api";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const savedUserData = JSON.parse(localStorage.getItem("userData"));
  const [selectedFile, setSelectedFile] = useState(null);
  const baseImagePath = "http://localhost:8090/";
  const [userAd, setUserAd] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    try {
      if (selectedFile) {
        const result = await FetchUserAvatar(selectedFile);
        console.log("Avatar uploaded successfully:", result);
        const updatedUserData = await GetUserData();
        console.log("Updated user data:", updatedUserData);
      } else {
        console.error("No file selected");
      }
    } catch (error) {
      console.error("Error uploading avatar:", error);
    }
  };

  console.log("User data retrieved:", savedUserData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetUserAd();
        setUserAd(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const tokenRefreshInterval = setInterval(() => {
      refreshToken();
    }, 60000);
    return () => clearInterval(tokenRefreshInterval);
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <S.StyledMain>
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
              <S.Header__BtnputAd>
                Разместить объявление
              </S.Header__BtnputAd>
              {savedUserData ? (
                <S.Header__BtnLk onClick={handleLogOut}>Выйти</S.Header__BtnLk>
              ) : (
                <S.Header__BtnLk>Личный кабинет</S.Header__BtnLk>
              )}
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
                          <input type="file" onChange={handleFileChange} />
                        </div>
                        <S.Settings__ChangePhoto
                          type="file"
                          onClick={handleUpload}
                        >
                          Заменить
                        </S.Settings__ChangePhoto>
                      </S.Settings__Left>
                      <S.Settings__Right>
                        <S.Settings__Form action="#">
                          <S.Settings__Div>
                            <label htmlFor="fname">Имя</label>
                            <S.Settings__Fname
                              id="settings-fname"
                              name="fname"
                              type="text"
                              placeholder="Имя"
                            />
                          </S.Settings__Div>

                          <S.Settings__Div>
                            <label htmlFor="lname">Фамилия</label>
                            <S.Settings__Lname
                              id="settings-lname"
                              name="lname"
                              type="text"
                              placeholder="Фамилия"
                            />
                          </S.Settings__Div>

                          <S.Settings__Div>
                            <label htmlFor="city">Город</label>
                            <S.Settings__City
                              id="settings-city"
                              name="city"
                              type="text"
                              placeholder={savedUserData.city}
                            />
                          </S.Settings__Div>

                          <S.Settings__Div>
                            <label htmlFor="phone">Телефон</label>
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
                  {userAd &&
                    userAd.map((item, index) => (
                      <S.Cards__Item key={index}>
                        <S.Cards__Card>
                          <S.Card__Image>
                          <Link to="#">
                              <img
                                src={baseImagePath + item.images[0].url}
                                alt="picture"
                              />
                            </Link>
                          </S.Card__Image>
                          <div>
                            <Link to="#">
                              <S.Card__Title>{item.title}</S.Card__Title>
                            </Link>
                            <S.Card__Price>{item.price}&nbsp;₽</S.Card__Price>
                            <S.Card__Place>
                              Город&nbsp;{item.user.city}
                            </S.Card__Place>
                            <S.Card__Date>{item.created_on}</S.Card__Date>
                          </div>
                        </S.Cards__Card>
                      </S.Cards__Item>
                    ))}
                </S.Main__ContentCards>
              </S.Main__Content>
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
              <Link to="#">
                  <img src="img/icon_02.png" alt="home" />
                </Link>
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
