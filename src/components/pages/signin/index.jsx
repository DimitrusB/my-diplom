import { Link, useNavigate } from "react-router-dom";
import * as S from "./signin.style";
import { LoginUser } from "../../../api/api";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveUserData } from "../../store/actions/actions";

export const Signin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()


  const handleLogin = async (e) => {
    e.preventDefault();
 
    const userData = {
      password,
      email,
    };
    
    console.log(userData);
  
    try {
      await LoginUser(userData);
      console.log("Login successful");
      dispatch(saveUserData(userData.email, userData.password));
      navigate('/profile')
      console.log(userData.email);
    } catch (error) {
      console.error("Error during login:", error.response?.data || error.message);
    }
  };

  return (
    <body>
      <S.Wrapper>
        <S.ContainerEnter>
          <S.Modal__block>
            <S.Modal__formLogin id="formLogIn" action="#">
            <S.Modal__logo>
              <Link to="/">
                <S.Modal__logoImg src="../img/logo_modal.png" alt="logo" />
              </Link>
            </S.Modal__logo>
            <S.Modal__input
              type="text"
              name="login"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <S.Modal__input
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <S.Modal__btnEnter>
              <a onClick={handleLogin}>Войти</a>{" "}
            </S.Modal__btnEnter>
            <Link to="/reg">
            <S.Modal__btnSignup id="btnSignUp">
              <a href="signup.html">Зарегистрироваться</a>{" "}
            </S.Modal__btnSignup>
            </Link>
            </S.Modal__formLogin>
          </S.Modal__block>
        </S.ContainerEnter>
      </S.Wrapper>
    </body>
  );
};
