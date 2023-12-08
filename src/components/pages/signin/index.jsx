import { Link, useNavigate } from "react-router-dom";
import * as S from "./signin.style";
import { GetUserData, LoginUser } from "../../../api/api";
import { useState } from "react";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  


  const handleLogin = async (e) => {
    e.preventDefault();
 
    const userData = {
      password,
      email,
    };
 
    try {
      await LoginUser(userData);
      const userDataResponse = await GetUserData();
      localStorage.setItem('userData', JSON.stringify(userDataResponse));
      console.log("User data:", userDataResponse);

      navigate('/profile');
    } catch (error) {
      console.error("Error during login:", error.response?.data || error.message);
    }
  };

  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.Modal__block>
          <S.Modal__formLogin onSubmit={handleLogin}>
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
              <a onClick={handleLogin}>Войти</a>
            </S.Modal__btnEnter>
            <Link to="/reg">
              <S.Modal__btnSignup>
              <div>Зарегистрироваться</div>
              </S.Modal__btnSignup>
            </Link>
          </S.Modal__formLogin>
        </S.Modal__block>
      </S.ContainerEnter>
    </S.Wrapper>
  );
};
