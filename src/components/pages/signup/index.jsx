import { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./signup.style";

export const Signup = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    lastName: '',
    city: ''
  });

  // Обработчик изменений в полях формы
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();

    // Здесь можно выполнить отправку данных на сервер, используя значения из formData
    // Например, можно использовать fetch или другие библиотеки для отправки данных на сервер
    // Например:

    fetch('http://localhost:8090/auth/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Результат регистрации:', data);
        // Обработка успешной регистрации или другие действия после регистрации
      })
      .catch(error => {
        console.error('Ошибка при регистрации:', error);
        // Обработка ошибки регистрации
      });
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
              id="formlogin"
              placeholder="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <S.Modal__input
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleInputChange}
            />
            <S.Modal__input
              type="confirm password"
              name="confirm password"
              id="confirm password"
              placeholder="Повторите пароль"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <S.Modal__input
              type="text"
              name="name"
              id="formname"
              placeholder="Имя (необязательно)"
              value={formData.name}
              onChange={handleInputChange}
            />
            <S.Modal__input
              type="text"
              name="lastname"
              id="formlastname"
              placeholder="Фамилия (необязательно)"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <S.Modal__input
              type="text"
              name="city"
              id="formcity"
              placeholder="Город (необязательно)"
              value={formData.city}
              onChange={handleInputChange}
            />
            <S.Modal__btnEnter id="btnEnter">
              <a href="../index.html">Войти</a>{" "}
            </S.Modal__btnEnter>
            <S.Modal__btnSignup id="btnSignUp">
              <a href="signup.html">Зарегистрироваться</a>{" "}
            </S.Modal__btnSignup>
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
