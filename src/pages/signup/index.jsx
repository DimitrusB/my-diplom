import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./signup.style";
import { registerUser } from "../../api/api";
import { FooterComp } from "../../components/forms/footer";

export const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [city, setCity] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    const userData = {
      password,
      role: "user",
      email,
      name,
      surname: lastname,
      phone: "",
      city,
    };

    console.log(userData);

    try {
      await registerUser(userData);
      console.log("Registration successful");
      navigate('/auth')
    } catch (error) {
      console.error(
        "Error during registration:",
        error.response?.data || error.message
      );
    }
  };

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
            <S.Modal__input
              type="password"
              name="confirm password"
              placeholder="Повторите пароль"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <S.Modal__input
              type="text"
              name="name"
              placeholder="Имя (необязательно)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <S.Modal__input
              type="text"
              name="lastname"
              placeholder="Фамилия (необязательно)"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <S.Modal__input
              type="text"
              name="city"
              placeholder="Город (необязательно)"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Link to="/auth">
              <S.Modal__btnEnter>
                <a>Войти</a>
              </S.Modal__btnEnter>
            </Link>
            <S.Modal__btnSignup onClick={handleRegistration}>
              <a>Зарегистрироваться</a>
            </S.Modal__btnSignup>
          </S.Modal__formLogin>
<FooterComp/>
        </S.Modal__block>
      </S.ContainerEnter>
    </S.Wrapper>
  );
};
