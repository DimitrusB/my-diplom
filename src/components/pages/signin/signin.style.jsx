import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

export const ContainerEnter = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #f4f5f6;
`;

export const Modal__block = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - (366px / 2));
  top: calc(50% - (439px / 2));
  opacity: 1;
`;

export const Modal__formLogin = styled.form`
  width: 366px;
  height: 439px;
  background-color: #ffffff;
  border-radius: 12px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 43px 47px 47px 40px;

  input:first-child {
    margin-bottom: 30px;
  }
`;

export const Modal__logo = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 34px;
  background-color: transparent;
`;

export const Modal__logoImg = styled.img`
  width: 140px;
  height: auto;
`;

export const Modal__input = styled.input`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;

  ::-webkit-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }

  :-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }

  ::-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }

  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
`;

export const Modal__btnEnter = styled.button`
  width: 278px;
  height: 52px;
  background-color: #009ee4;
  border-radius: 6px;
  margin-top: 60px;
  margin-bottom: 20px;
  border: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  a {
    width: 100%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #ffffff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  :hover {
    background-color: #0080c1;
  }

  :active {
    background-color: #0080c1;
  }
`;

export const Modal__btnSignup = styled.button`
  width: 278px;
  height: 52px;
  background-color: transparent;
  border: 1px solid #d0cece;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #000000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  a {
    width: 100%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #000000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  :hover {
    background-color: #f4f5f6;
  }

  :active {
    background-color: #d9d9d9;
  }
`;

//   .login {
//     margin-bottom: 30px;
//   }

//   @media screen and (max-width: 768px) {
//     .modal__block {
//       position: absolute;
//       z-index: 2;
//       left: calc(50% - (320px/2));
//       top: 55px;
//       opacity: 1;
//     }
//     .modal__form-login {
//       width: 320px;
//       height: auto;
//       background-color: #FFFFFF;
//       border-radius: 0px;
//       display: -webkit-box;
//       display: -ms-flexbox;
//       display: flex;
//       -webkit-box-orient: vertical;
//       -webkit-box-direction: normal;
//           -ms-flex-direction: column;
//               flex-direction: column;
//       -webkit-box-align: center;
//           -ms-flex-align: center;
//               align-items: center;
//       padding: 40px 20px;
//     }
//     .modal__logo {
//       width: 120px;
//       height: 18px;
//       margin-bottom: 30px;
//       background-color: transparent;
//     }
//     .modal__logo img {
//       width: 120px;
//       height: auto;
//     }
//     .modal__input {
//       width: 100%;
//       border: 1px solid #D0CECE;
//       padding: 9px 17px;
//       border-radius: 30px;
//     }
//     .modal__input::-webkit-input-placeholder {
//       font-style: normal;
//       font-weight: 400;
//       font-size: 14px;
//       line-height: 21px;
//       color: #B3B3B3;
//     }
//     .modal__input:-ms-input-placeholder {
//       font-style: normal;
//       font-weight: 400;
//       font-size: 14px;
//       line-height: 21px;
//       color: #B3B3B3;
//     }
//     .modal__input::-ms-input-placeholder {
//       font-style: normal;
//       font-weight: 400;
//       font-size: 14px;
//       line-height: 21px;
//       color: #B3B3B3;
//     }
//     .modal__input::placeholder {
//       font-style: normal;
//       font-weight: 400;
//       font-size: 14px;
//       line-height: 21px;
//       color: #B3B3B3;
//     }
//     .modal__btn-enter {
//       height: 46px;
//       margin-top: 40px;
//       margin-bottom: 10px;
//       border: none;
//     }
//     .modal__btn-enter a {
//       font-size: 16px;
//       line-height: 24px;
//     }
//     .modal__btn-signup {
//       height: 46px;
//       border: 1px solid #D9D9D9;
//       font-size: 16px;
//       line-height: 24px;
//     }
//     .modal__btn-signup a {
//       font-size: 16px;
//       line-height: 24px;
//     }
//     .login {
//       margin-bottom: 14px;
//     }
//   }
