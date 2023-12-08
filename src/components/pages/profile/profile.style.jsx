import styled from "styled-components";

export const StyledMain = styled.div`
  *::before,
  *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  a,
  a:visited {
    text-decoration: none;
    font-family: "StratosSkyeng", sans-serif;
    cursor: pointer;
  }
`;

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

  @media screen and (max-width: 620px) {
    width: 100%;
    min-width: 320px;
  }

  @media screen and (max-width: 620px) {
    width: 100%;
    min-width: 320px;
  }
`;
export const Header = styled.header`
  background-color: #009ee4;

  @media screen and (max-width: 620px) {
    width: 100%;
    height: 55px;
    -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
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

  @media screen and (max-width: 620px) {
    height: 55px;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    padding: 0 20px;
  }
`;

export const Header__Logo = styled.div`
  display: none;

  @media screen and (max-width: 620px) {
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

  @media screen and (max-width: 620px) {
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

  @media screen and (max-width: 620px) {
    display: none;
  }
`;

export const Logo__MobLink = styled.div`
  @media screen and (max-width: 620px) {
    display: block;
    width: 32px;
    height: 32px;
  }
`;

export const Logo__MobImg = styled.img`
  @media screen and (max-width: 620px) {
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

  @media screen and (max-width: 890px) {
    padding: 85px 0px 84px;
  }

  @media screen and (max-width: 620px) {
    padding: 85px 0px 84px;
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

  @media screen and (max-width: 620px) {
    display: none;
  }
`;

export const Main__CenterBlock = styled.div`
  @media screen and (max-width: 890px) {
    margin: 0 auto;
    padding: 0 20px;
  }

  @media screen and (max-width: 620px) {
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export const MainH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;

  &:hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
  }

  @media screen and (max-width: 620px) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 20px;
  }
`;
export const Main__Profile = styled.div`
  width: 100%;
  padding: 0 0 70px;

  @media screen and (max-width: 620px) {
    width: 100%;
    padding: 0 0 40px;
  }
`;
export const Main__Title = styled.h3`
  margin-bottom: 20px;
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;

  @media screen and (max-width: 620px) {
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 1;
  }
`;
export const Main__Content = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 620px) {
    width: 100%;
    margin: 0 auto;
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

export const Profile__Content = styled.div`
  max-width: 834px;

  @media screen and (max-width: 890px) {
    max-width: 834px;
    width: 100%;
  }
`;

export const Profile__Settings = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
  -ms-flex-align: top;
  align-items: top;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  @media screen and (max-width: 890px) {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
`;

export const Settings__Left = styled.div`
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
  margin-right: 43px;

  @media screen and (max-width: 620px) {
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
  }
`;

export const Settings__Img = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;

  img {
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 50%;
  }
  @media screen and (max-width: 620px) {
    width: 132px;
    height: 132px;
  }
`;

export const Settings__ChangePhoto = styled.a`
  margin-top: 10px;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #009ee4;
`;

export const Settings__Right = styled.div`
  width: 630px;

  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;

export const Settings__Div = styled.div`
  display: inline-block;
  margin: 0 7px 20px;

  @media screen and (max-width: 620px) {
    display: inline-block;
    margin: 0 0px 18px;
  }
`;

export const Settings__Form = styled.form`
  width: 630px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  label {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #c4c4c4;
    margin-bottom: 4px;
    display: block;
  }

  @media screen and (max-width: 620px) {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;

    label {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
      margin-bottom: 6px;
    }
  }
`;
export const Settings__Fname = styled.input`
  width: 300px;

  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;

  &::-webkit-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &:-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  @media screen and (max-width: 620px) {
    border-radius: 30px;
    padding: 9px 17px;
    width: 100%;

    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }
    &:-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }
    &::-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export const Settings__Lname = styled.input`
  width: 300px;

  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;

  &::-webkit-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &:-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: 620px) {
    border-radius: 30px;
    padding: 9px 17px;
    width: 100%;

    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }
    &:-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }
    &::-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export const Settings__City = styled.input`
  width: 300px;

  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;

  &::-webkit-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &:-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: 620px) {
    border-radius: 30px;
    padding: 9px 17px;
    width: 100%;

    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }
    &:-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }
    &::-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export const Settings__Phone = styled.input`
  width: 614px;

  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;

  &::-webkit-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &:-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: 620px) {
    border-radius: 30px;
    padding: 9px 17px;
    width: 100%;

    &::-webkit-input-placeholder {
        font-size: 14px;
        line-height: 21px;
      }
      &:-ms-input-placeholder {
        font-size: 14px;
        line-height: 21px;
      }
      &::-ms-input-placeholder {
        font-size: 14px;
        line-height: 21px;
      }
      &::placeholder {
        font-size: 14px;
        line-height: 21px;
      }
  }

    &::-webkit-input-placeholder {
        font-size: 14px;
        line-height: 21px;
      }
      &:-ms-input-placeholder {
        font-size: 14px;
        line-height: 21px;
      }
      &::-ms-input-placeholder {
        font-size: 14px;
        line-height: 21px;
      }
      &::placeholder {
        font-size: 14px;
        line-height: 21px;
      }
  }
`;

export const Settings__Btn = styled.button`
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  width: 154px;
  height: 50px;
  margin: 10px 7px 0;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${props => (props.disabled ? '#cccccc' : '#009ee4')};
  border-radius: 6px;
  border: 1px solid ${props => (props.disabled ? '#cccccc' : '#009ee4')};

  &:hover {
    background-color: ${props => (props.disabled ? '#cccccc' : '#0080c1')};
  }

  @media screen and (max-width: 620px) {
    font-size: 16px;
    line-height: 1;
    width: 100%;
    height: 46px;
    margin: 8px 0px 0;
  }
`;

export const Main__ContentCards = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1158px;
  width: 100%;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (270px) [4];
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;

  @media screen and (max-width: 1158px) {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (270px) [3];
    grid-template-columns: repeat(3, 270px);
  }

  @media screen and (max-width: 890px) {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (270px) [2];
    grid-template-columns: repeat(2, 270px);
  }

  @media screen and (max-width: 620px) {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (137px) [2];
    grid-template-columns: repeat(2, 137px);
    grid-auto-rows: 293px;
    grid-gap: 10px 10px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 596px;
  }
`;

export const Cards__Item = styled.div`
  margin: 0;

  @media screen and (max-width: 620px) {
    margin: 0;
  }
`;

export const Cards__Card = styled.div`
  width: 270px;
  height: 441px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  @media screen and (max-width: 620px) {
    width: 137px;
    height: 293px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`;

export const Card__Image = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;

  img {
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }

  @media screen and (max-width: 620px) {
    width: 137px;
    height: 132px;
    background-color: #d9d9d9;

    img {
      width: 100%;
      height: 100%;
      display: block;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
`;

export const Card__Title = styled.h3`
  height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009ee4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 620px) {
    height: 51px;
    font-size: 14px;
    line-height: 17px;
    color: #009ee4;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

export const Card__Price = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  margin-bottom: 10px;

  @media screen and (max-width: 620px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Card__Place = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;

  @media screen and (max-width: 620px) {
    font-size: 12px;
    line-height: 16px;
    color: #5f5f5f;
  }
`;
export const Card__Date = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;

  @media screen and (max-width: 620px) {
    font-size: 12px;
    line-height: 16px;
    color: #5f5f5f;
  }
`;

export const Footer = styled.footer`
  display: none;

  @media screen and (max-width: 620px) {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 3;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 54px;
    width: 100%;
    background-color: #ffffff;
    -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const Footer__Container = styled.div`
  @media screen and (max-width: 620px) {
    width: 225px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
`;

export const Footer__Img = styled.div`
  @media screen and (max-width: 620px) {
    width: 42px;
    height: 42px;
    img {
      width: 100%;
      height: 100%;
      display: block;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
`;
