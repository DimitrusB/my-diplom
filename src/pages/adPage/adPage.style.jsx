import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #f1f1f1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;

  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 320px;
    padding: 0 0px;
  }
`;

export const Header = styled.header`
  background-color: #009ee4;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
    width: 100%;
    height: 55px;
    -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
    padding: 0 20px;
  }
`;

export const Header__nav = styled.nav`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0 10px;
  height: 79px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;

  @media screen and (max-width: 768px) {
    height: 55px;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    padding: 0;
  }
`;

export const Header__Logo = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Header__BtnLk = styled.button`
  width: 173px;
  height: 40px;
  margin-left: 10px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #ffffff;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Header__BtnputAd = styled.button`
  width: 232px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #ffffff;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Logo__MobLink = styled.div`
  @media screen and (max-width: 768px) {
    display: block;
    width: 32px;
    height: 32px;
  }
`;

export const Logo__MobImg = styled.img`
  @media screen and (max-width: 768px) {
    width: 32px;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;

export const Maincontainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;

  @media screen and (max-width: 768px) {
    padding: 0 20px 0;
  }
`;

export const Main__Menu = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
  padding: 11px 0;
  width: 100%;
  padding: 31px 10px 64px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Menu__LogoLink = styled.div`
  width: 54;
  height: 50px;
`;
export const Menu__LogoImg = styled.img`
  width: 54px;
  height: auto;
`;

export const Menu__Form = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
`;

export const Menu__Btn = styled.button`
  width: 241px;
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;

  &:hover {
    background-color: #0080c1;
  }
`;

export const Main__artic = styled.div`
  max-width: 1178px;
  padding: 0 0 70px;
  margin: 0 auto;
  padding: 0 5px 70px;

  @media screen and (max-width: 768px) {
    max-width: 1178px;
    width: 100%;
    padding: 55px 0 0px;
    margin: 0 auto;
  }
`;

export const Main__title = styled.h3`
  margin-bottom: 32px;
  padding: 0 5px;
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;

  @media screen and (max-width: 768px) {
    margin-bottom: 14px;
    padding: 0;
  }
`;

export const Main__content = styled.div`
  max-width: 792px;
  width: 100%;
  padding: 0 5px 117px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    padding: 0 0 84px;
  }
`;

export const Main__text = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export const Artic__content = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
  -ms-flex-align: top;
  align-items: top;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: start;

  @media screen and (max-width: 768px) {
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
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
`;

export const Article__fillImg = styled.div`
  width: 100%;
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

  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    overflow: hidden;
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
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;

    &::before {
      content: "";
      display: block;
      width: 23px;
      height: 23px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      position: absolute;
      top: 24px;
      left: 32px;
      cursor: pointer;
    }
  }
`;

export const Article__left = styled.div`
  max-width: 480px;
  margin-right: 54px;

  @media screen and (max-width: 890px) {
    margin-right: 20px;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    min-width: 320px;
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
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const Article__img = styled.div`
  width: 480px;
  height: 480px;
  background-color: #f0f0f0;
  margin: 0 5px;

  img {
    width: 480px;
    height: 480px;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 320px;
    height: auto;
    min-height: 320px;
    margin: 0 0px;
  }
`;

export const Article__imgBarMob = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    width: 68px;
    height: 8px;
    position: absolute;
    bottom: 20px;
    left: calc(50% - (68px / 2));
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
`;

export const Article__imgBar = styled.div`
  margin-top: 30px;
  width: 490px;
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
  -webkit-box-pack: left;
  -ms-flex-pack: left;
  justify-content: left;
  overflow: hidden;
  margin-left: -5px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Article__imgBarDiv = styled.div`
  width: 88px;
  min-width: 88px;
  height: 88px;
  background-color: #f0f0f0;
  border: 2px solid #f0f0f0;
  margin: 0 5px;
  cursor: pointer;
  img {
    width: 88px;
    height: 88px;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;

export const Article__right = styled.div`
  max-width: 621px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    padding: 0 20px;
  }
`;

export const Article__block = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const Article__title = styled.h3`
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const Article__info = styled.div`
  margin-bottom: 34px;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Article__date = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 17px;
    color: #5f5f5f;
    margin-bottom: 4px;
  }
`;

export const Article__city = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 17px;
    color: #5f5f5f;
    margin-bottom: 4px;
  }
`;

export const Article__link = styled.a`
  font-size: 16px;
  line-height: 21px;
  color: #009ee4;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 19px;
    color: #009ee4;
  }
`;

export const Article__price = styled.p`
  font-size: 28px;
  line-height: 39px;
  font-weight: 700;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 25px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;
export const Article__btnDiv = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Article__btn = styled.button`
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #ffffff;
  font-family: "Roboto", sans-serif;

  &:hover {
    background-color: #0080c1;
  }

  span {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 57px;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;

    span {
      font-size: 12px;
    }
  }
`;

export const Article__author = styled.div`
  margin-top: 34px;
  margin-bottom: 20px;
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

  @media screen and (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const imgBarMob__circle = styled.div`
  @media screen and (max-width: 768px) {
    width: 8px;
    height: 8px;
    border-radius: 8px;
    border: 1px solid #fff;
    background-color: #f0f0f0;
  }
`;

export const imgBarMob__circle_active = styled.div`
  @media screen and (max-width: 768px) {
    width: 8px;
    height: 8px;
    border-radius: 8px;
    border: 1px solid #fff;
    background: #fff;
  }
`;

export const Author__img = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const Author__cont = styled.div`
  margin-left: 12px;
`;

export const Author__name = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  color: #009ee4;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 23px;
    font-weight: 600;
  }
`;

export const Author__about = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #5f5f5f;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 28px;
  }
`;
