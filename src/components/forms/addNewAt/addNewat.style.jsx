import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  position: fixed;

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

export const Modal__form_newArt = styled.form`
  margin-top: 22px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 600px) {
    margin-top: 22px;
  }
`;

export const Form__NewArt_block = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    margin-bottom: 4px;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 18px;

    label {
      margin-bottom: 5px;
      font-size: 14px;
      line-height: 21px;
      color: #000000;
    }
  }
`;

export const Form__newArt_input = styled.input`
  padding: 13px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;

  width: 100%;
  font-size: 16px;
  line-height: 24px;

  &::-webkit-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }

  &:-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }

  &::-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }

  @media screen and (max-width: 600px) {
    padding: 9px 17px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    font-size: 16px;
    line-height: 1;

    width: 100%;

    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }

    &:-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
    &::-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
  }
`;

export const Form__newArt_Area = styled.textarea`
  padding: 13px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  width: 500px;
  height: 200px;

  font-family: "Roboto", sans-serif;
  width: 100%;
  max-height: 200px;
  font-size: 16px;
  line-height: 24px;

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

  @media screen and (max-width: 600px) {
    border-radius: 20px;
    background: #fff;
    font-family: "Roboto", sans-serif;
    width: 100%;
    border-radius: 20px;
    height: 107px;

    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }

    &:-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
    &::-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
  }
`;

export const Form__newArt_p = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 10px;

  span {
    margin-left: 10px;
    color: rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 10px;

    span {
      display: block;
      margin-left: 0px;
      color: rgba(0, 0, 0, 0.3);
    }
  }
`;

export const Form__newArt__bar_img = styled.div`
  width: 500px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 10px;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    margin: 0px -5px 10px;
    overflow: auto;
  }
`;

export const Form__newArt_img = styled.div`
  width: 90px;
  height: 90px;
  margin-right: 10px;
  position: relative;
  z-index: 0;

  img {
    display: block;
    width: 90px;
    height: 90px;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 2;
  }

  @media screen and (max-width: 600px) {
    display: block;
    width: 90px;
    min-width: 90px;
    height: 90px;
    background-color: #f0f0f0;
    margin: 0 5px;

    img {
      display: block;
      width: 90px;
      height: 90px;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
`;

export const Form__newArt_img_cover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #f0f0f0;
  z-index: -1;

  &:before {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  &:after {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
  }
`;

export const Form__newArt__input_price_cover = styled.div`
  width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  position: absolute;
  bottom: 13px;
  left: 165px;
  z-index: 0;
  background-color: #ffffff;

  @media screen and (max-width: 600px) {
    width: 21px;
    height: 21px;
    font-size: 14px;
    line-height: 21px;
    left: auto;
    right: 18px;
  }
`;

export const Form__newArt__input_price = styled.input`
  padding: 13px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  width: 200px;
  height: 50px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;

  &::-webkit-input-placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }

  &:-ms-input-placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }

  &::-ms-input-placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }

  &::placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    border-radius: 30px;
    border: 1px solid #d9d9d9;

    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #000000;
    }
    &:-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #000000;
    }
    &::-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #000000;
    }
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #000000;
    }
  }
`;

export const Form__newArt__btn_pub = styled.button`
  margin-top: 10px;
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

  @media screen and (max-width: 600px) {
    margin-top: 10px;
    width: 100%;
    height: 46px;
  }
`;

export const Form__NewArt_block_price = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 20px;
  position: relative;

  label {
    margin-bottom: 4px;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
`;
