import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  position: absolute;

  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    font-family: "StratosSkyeng", sans-serif;
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    display: contents;
  }
`;

export const Container__bg = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: rgb(53 56 59 / 47%);
`;

export const Modal__block = styled.div`
  position: absolute;
  z-index: 5;
  left: calc(50% - (600px / 2));
  top: calc(50% - (600px / 2));
  opacity: 1;

  @media screen and (max-width: 600px) {
    position: absolute;
    z-index: 5;
    left: 0px;
    top: 55px;
    opacity: 1;
    width: 100%;
  }
`;

export const Modal__content = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 600px;
  height: auto;
  padding: 32px 50px 42px;
  background-color: #ffffff;
  border-radius: 12px;
  position: relative;

  @media screen and (max-width: 600px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 100%;
    min-width: 320px;
    height: 100vh;
    padding: 30px 20px 30px;
  }
`;
export const Modal__title = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;

  // &:hover,
  // ::before {
  //   border-top: 2px solid #0080C1;
  //   border-left: 2px solid #0080C1;
  // }
  @media screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 29px;
    padding: 0 0 0 26px;
    position: relative;

    &::before {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      position: absolute;
      top: 9px;
      left: 0;
      cursor: pointer;
    }
  }
`;
export const Modal__btn_close = styled.div`
  width: 23px;
  height: 23px;
  position: absolute;
  top: 47px;
  right: 50px;
  z-index: 3;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const Modal__btn_close_line = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &:hover {
    path {
      stroke: #009ee4;
    }
  }
`;

export const Modal__scroll = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 100%;
  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;

  &::-webkit-scrollbar {
    width: 0px;
    background-color: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 0px;
  }
`;

export const Modal__form_newArt = styled.form`
  margin-top: 5px;
  margin-bottom: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
`;

export const Modal__review = styled.div`
  width: 100%;
  height: 495px;
`;

export const Form__newArt__block = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 14px;

  label {
    margin-bottom: 14px;
    font-size: 16px;
    line-height: 32px;
    font-weight: 600;
    color: #000000;
  }

  textarea {
    font-family: "Roboto", sans-serif;
    padding: 10px 19px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    font-size: 16px;
    line-height: 1;
    width: 100%;
    height: 100px;
    max-height: 100px;

    &::-webkit-input-placeholder {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #0000004d;
    }

    &:-ms-input-placeholder {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #0000004d;
    }

    &::-ms-input-placeholder {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #0000004d;
    }

    &::placeholder {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #0000004d;
    }
  }
`;

export const Form__newArt__btn_pub = styled.button`
  width: 181px;
  height: 50px;
  background: #d9d9d9;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  &:hover {
    background-color: #0080c1;
  }
`;

export const Reviews__review = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: flex-start;
  margin: 15px 0;
`;

export const Review__item = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const Review__left = styled.div`
  margin-right: 12px;
`;

export const Review__img = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;

  img {
    display: block;
    width: 100%;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;

export const Review__right = styled.div`
  display: block;
`;

export const Review__name = styled.p`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  color: #000000;

  span {
    margin-left: 10px;
    color: #5f5f5f;
  }
`;

export const Review__title = styled.h5`
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  color: #000000;
`;

export const Review__text = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
