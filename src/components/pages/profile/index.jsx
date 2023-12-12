import { Link, useNavigate } from "react-router-dom";
import * as S from "./profile.style";
import { useEffect, useRef, useState } from "react";
import {
  FetchUserAvatar,
  GetUserAd,
  GetUserData,
  refreshToken,
} from "../../../api/api";
import { EditUserData } from "../../forms/EditUserData";
import { AddNewAd } from "../../forms/addNewAt";
import { UsersAdComp } from "../UsersAd";


export const ProfilePage = () => {
  const navigate = useNavigate();
  const savedUserData = JSON.parse(localStorage.getItem("userData"));
  const [selectedFile, setSelectedFile] = useState(null);
  const baseImagePath = "http://localhost:8090/";
  const [userAd, setUserAd] = useState();
  const [error, setError] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const inputRef = useRef(null);
  const [userAdEmpty, setUserAdEmpty] = useState();
  const [avatarUrl, setAvatarUrl] = useState(savedUserData.avatar);


  const handleButtonClick = () => {
    setModalVisible(true);
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    try {
      if (file) {
        const result = await FetchUserAvatar(file);
        console.log("Аватар успешно загружен:", result);
        const updatedUserData = await GetUserData();
        console.log("Обновленные данные пользователя:", updatedUserData);
        savedUserData.avatar = updatedUserData.avatar
        localStorage.setItem("userData", JSON.stringify(savedUserData));
        setAvatarUrl(updatedUserData.avatar);
      } else {
        console.error("Файл не выбран");
      }
    } catch (error) {
      console.error("Ошибка при загрузке аватара:", error);
    }
  };

  useEffect(() => {
    GetUserData()
  }, [avatarUrl]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetUserAd();
        setUserAd(data);

        if (data.length === 0) {
          setUserAdEmpty(true);
        } else {
          setUserAdEmpty(false);
        }
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
              <UsersAdComp
                userAdEmpty={userAdEmpty}
                baseImagePath={baseImagePath}
                userAd={userAd}
              />
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
