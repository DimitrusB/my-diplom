import { Link } from "react-router-dom";
import * as S from "./signin.style";

export const Signin = () => {
  return (
    <body>
      <S.Wrapper>
        <S.ContainerEnter>
          <S.Modal__block>
            <S.Modal__formLogin id="formLogIn" action="#" />
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
          </S.Modal__block>
        </S.ContainerEnter>
      </S.Wrapper>
    </body>
  );
};
