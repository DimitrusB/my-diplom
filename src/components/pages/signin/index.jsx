import { Link } from "react-router-dom";
import * as S from "./signin.style";

export const Signin = () => {
  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.Header>
          <Link to="/">
            <img src="img/logo.png" alt="logo" />
          </Link>
        </S.Header>
        <S.Modal__block>
          <S.HeaderMob>
            <Link to="/">
              <img src="img/logo-mob.png" alt="logo" />
            </Link>
          </S.HeaderMob>
          <S.Modal__formLogin id="formLogIn" action="#">
            <S.Modal__logo>
              <Link to="/">
                <S.Modal__logoImg src="../img/logo_modal.png" alt="logo" />
              </Link>
            </S.Modal__logo>
            <S.Modal__input
              type="text"
              name="login"
              id="formlogin"
              placeholder="email"
            />
            <S.Modal__input
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
            <S.Modal__btnEnter id="btnEnter">
              <a href="../index.html">Войти</a>{" "}
            </S.Modal__btnEnter>
            <Link to="/reg">
            <S.Modal__btnSignup id="btnSignUp">
              <a href="signup.html">Зарегистрироваться</a>{" "}
            </S.Modal__btnSignup>
            </Link>
          </S.Modal__formLogin>
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
        </S.Modal__block>
      </S.ContainerEnter>
    </S.Wrapper>
  );
};
