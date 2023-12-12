import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GetAdsByID, GetAllAds, GetUserAd } from "../../../api/api";
import { AddNewAd } from "../../forms/addNewAt";

import * as S from "../profile/profile.style";
import { UsersAdComp } from "../UsersAd";

export const SellersProfilePage = () => {
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
  const sells_from = userAds.length > 0 ? userAds[0].user.sells_from : null;

  const handleButtonClick = () => {
    setModalVisible(true);
  };

  useEffect(() => {
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
      });
  }, [itemUser]);

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
              <S.Header__BtnLk>Личный кабинет</S.Header__BtnLk>
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
                  <S.Menu__Form action="#">
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
                        <p>{name}</p>
                        <p>{city}</p>
                        <p>{sells_from}</p>
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

          <S.Footer>
            <S.Footer__Container>
              <S.Footer__Img>
                <Link to="/">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/icon_01.png`}
                    alt="home"
                  />
                </Link>
              </S.Footer__Img>
              <S.Footer__Img onClick={handleButtonClick}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/icon_02.png`}
                  alt="add"
                />
              </S.Footer__Img>
              <S.Footer__Img>
                <Link to="#">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/icon_03.png`}
                    alt="home"
                  />
                </Link>
              </S.Footer__Img>
            </S.Footer__Container>
          </S.Footer>
        </S.Container>
      </S.Wrapper>
    </S.StyledMain>
  );
};
