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
  const [errorPassword, setErrorPassword] = useState(false);

  const sanitizeInput = (input) => {
    return input
      .replace(/<script.*?>.*?<\/script>/gi, "")
      .replace(/[^\w.@-А-Яа-яёЁ]/gi, "");
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      setErrorPassword(true);
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

    try {
      await registerUser(userData);
      console.log("Registration successful");
      navigate("/auth");
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
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(sanitizeInput(e.target.value))}
            />
            <S.Modal__input
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(sanitizeInput(e.target.value))}
              onBlur={() => setErrorPassword(false)}
            />
            <S.Modal__input
              type="password"
              name="confirm password"
              placeholder="Повторите пароль"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(sanitizeInput(e.target.value))
              }
              onBlur={() => setErrorPassword(false)}
            />
            <S.Modal__input
              type="text"
              name="name"
              placeholder="Имя (необязательно)"
              value={name}
              onChange={(e) => setName(sanitizeInput(e.target.value))}
            />
            <S.Modal__input
              type="text"
              name="lastname"
              placeholder="Фамилия (необязательно)"
              value={lastname}
              onChange={(e) => setLastname(sanitizeInput(e.target.value))}
            />
            <S.Modal__input
              type="text"
              name="city"
              placeholder="Город (необязательно)"
              value={city}
              onChange={(e) => setCity(sanitizeInput(e.target.value))}
            />
            <p style={{ color: "red" }}>
              <br></br>
              {errorPassword ? "Пароли не совпадают" : ""}
            </p>
            <S.Modal__btnEnter>
              <Link to="/auth">
                <p>Войти</p>
              </Link>
            </S.Modal__btnEnter>
            <S.Modal__btnSignup onClick={handleRegistration}>
              <a>Зарегистрироваться</a>
            </S.Modal__btnSignup>
          </S.Modal__formLogin>
          <FooterComp />
        </S.Modal__block>
      </S.ContainerEnter>
    </S.Wrapper>
  );
};
