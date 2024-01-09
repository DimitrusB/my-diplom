import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetAllAds, refreshToken } from "../../api/api";
import * as S from "./main.style";
import * as A from "../../components/assets/style";
import { UsersAdComp } from "../../components/forms/UsersAd";
import { ReactComponent as SpinAnimation } from "../../components/assets/Spin-0.9s-301px.svg";
import { FooterComp } from "../../components/forms/footer";

export const Main = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState([]);
  const baseImagePath = "http://localhost:8090/";
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [userAdEmpty, setUserAdEmpty] = useState();
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredAds = values.filter((ad) =>
    ad.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

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
      navigate("/profile");
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
              <Link to="/">
              <S.Search__logoLink title="На главную">
                <S.Search__logoImg src="img/logo.png" alt="logo" />
              </S.Search__logoLink>
              <S.Search__logoMobLink>
                <S.Search__logoMobImg src="img/logo-mob.png" alt="logo" />
              </S.Search__logoMobLink>
              </Link>
              <S.Search__form onSubmit={handleSearchSubmit}>
                <S.Search__text
                  type="search"
                  placeholder="Поиск по объявлениям"
                  name="search"
                  onChange={handleSearch}
                />
                <S.Search__textMob
                  type="search"
                  placeholder="Поиск"
                  name="search-mob"
                  onChange={handleSearch}
                />
                <S.Search__btn>Найти</S.Search__btn>
              </S.Search__form>
            </S.Main_search>
            <S.Maincontainer>
              <S.MainH2>Объявления</S.MainH2>
              <UsersAdComp
                userAdEmpty={userAdEmpty}
                baseImagePath={baseImagePath}
                userAd={filteredAds}
              />
            </S.Maincontainer>
          </main>

          <FooterComp />
        </S.Container>
      </S.Wrapper>
    </S.StyledMain>
  );
};
