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
`;

//   .btn-hov01:hover {
//     background: rgba(255, 255, 255, 0.15);
//     border: 1px solid #FFFFFF;
//   }

//   .btn-hov02:hover {
//     background-color: #0080C1;
//   }

//   .main__h2:hover::before {
//     border-top: 2px solid #0080C1;
//     border-left: 2px solid #0080C1;
//   }

export const Header = styled.header`
  background-color: #009ee4;
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
`;

export const Mainenter = styled.button`
    width: 224px;
    height: 40px;
    border: 1px solid #FFFFFF;
    border-radius: 6px;
    background-color: transparent;
    color: #FFFFFF;
    font-size: 16px;
    line-height: 1;
  }`;

export const Maincontainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 52px 10px 37px;
`;

export const Main_search = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 11px 0;
  max-width: 1178px;
  margin: 0 auto;
  padding: 31px 10px 0px;
`;

export const MainH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;
`;

// export const Maincontent = styled.dev`
//   width: 100%;
//   margin: 0 auto;
// `;

//   .search__logo-mob-link {
//     display: none;
//   }

//   .search__logo-img {
//     width: 54px;
//     height: auto;
//   }

export const Search__form = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;

//   .search__text-mob {
//     display: none;
//   }
export const Search__text = styled.input`
    width: 100%;
    height: 50px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    background-color: transparent;
    padding: 13px 19px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
      
    ::-webkit-input-placeholder 
            background-color: transparent;
            color: rgba(0, 0, 0, 0.3);
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
          
    :-ms-input-placeholder 
            background-color: transparent;
            color: rgba(0, 0, 0, 0.3);
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;

    ::-ms-input-placeholder 
            background-color: transparent;
            color: rgba(0, 0, 0, 0.3);
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            
    ::-ms-input-placeholder 
            background-color: transparent;
            color: rgba(0, 0, 0, 0.3);
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
  
     ::placeholder 
            background-color: transparent;
            color: rgba(0, 0, 0, 0.3);
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;       
  `;




//   .search__btn {
//     margin-left: 10px;
//     width: 158px;
//     height: 50px;
//     background-color: #009EE4;
//     border: 1px solid #009EE4;
//     border-radius: 6px;
//     font-size: 16px;
//     line-height: 24px;
//     color: #FFFFFF;
//   }

export const Cards = styled.div`
    max-width: 1158px;
    width: 100%;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (270px)[4];
        grid-template-columns: repeat(4, 270px);
    grid-auto-rows: 441px;
    grid-gap: 40px 26px;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    overflow-y: auto;
    scrollbar-color: #FFFFFF #2E2E2E;
    scrollbar-width: thin;
    scrollbar-width: 0px;
    height: 922px;
 

  ::-webkit-scrollbar 
    width: 0px;
    background-color: #009EE4;


 ::-webkit-scrollbar-thumb
    background-color: #0080C1;
    border-radius: 3px;
`;

export const Cards__item = styled.div`
  margin: 0;
`;

export const Cards__card = styled.div`
  width: 270px;
  height: 441px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const Card__image = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const Card__title = styled.h3`
  height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009ee4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Card__price = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  margin-bottom: 10px;
`;

export const Card__date = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
`;

export const Card__place = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;
`;

export const Footer = styled.footer`
  display: none;
`;

//   @media screen and (max-width: 1158px) {
//     .cards {
//       display: -ms-grid;
//       display: grid;
//       -ms-grid-columns: (270px)[3];
//           grid-template-columns: repeat(3, 270px);
//     }
//   }

//   @media screen and (max-width: 890px) {
//     .cards {
//       display: -ms-grid;
//       display: grid;
//       -ms-grid-columns: (270px)[2];
//           grid-template-columns: repeat(2, 270px);
//     }
//   }

//   @media screen and (max-width: 590px) {
//     .container {
//       width: 100%;
//       min-width: 320px;
//       min-height: 100vh;
//       background-color: #FFFFFF;
//     }
//     .header {
//       display: none;
//     }
//     .main__container {
//       padding: 85px 10px 84px;
//     }
//     .main__search {
//       width: 100%;
//       height: 55px;
//       background-color: #009EE4;
//       -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
//               box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
//       margin-bottom: 0px;
//       padding: 11px 17px;
//       position: fixed;
//       left: 0;
//       top: 0;
//       z-index: 3;
//     }
//     .main__h2 {
//       font-size: 24px;
//       line-height: 29px;
//       color: #000000;
//       margin-bottom: 20px;
//       text-align: center;
//       position: relative;
//     }
//     .main__h2::before {
//       content: "";
//       display: block;
//       width: 12px;
//       height: 12px;
//       background-color: transparent;
//       border-top: 2px solid #000000;
//       border-left: 2px solid #000000;
//       -webkit-transform: rotate(-45deg);
//               transform: rotate(-45deg);
//       position: absolute;
//       top: 9px;
//       left: 13px;
//       cursor: pointer;
//     }
//     .main__content {
//       width: 100%;
//       margin: 0 auto;
//       overflow: hidden;
//       position: fixed;
//       right: 0;
//       left: 0;
//       top: 134px;
//       bottom: 84px;
//     }
//     .search__logo-mob-link {
//       display: block;
//       width: 32px;
//       height: 32px;
//     }
//     .search__logo-link {
//       display: none;
//     }
//     .search__logo-mob-img {
//       width: 32px;
//       height: auto;
//       display: block;
//       -o-object-fit: cover;
//          object-fit: cover;
//     }
//     .search__form {
//       margin-left: 10px;
//       max-width: 1044px;
//       width: 100%;
//       display: -webkit-box;
//       display: -ms-flexbox;
//       display: flex;
//     }
//     .search__text {
//       display: none;
//     }
//     .search__text-mob {
//       display: inline-block;
//       width: 100%;
//       height: 32px;
//       border: none;
//       border-radius: 30px;
//       background-color: #FFFFFF;
//       padding: 5px 17px;
//       font-size: 14px;
//       line-height: 21px;
//       color: #000000;
//     }
//     .search__text-mob::-webkit-input-placeholder {
//       background-color: transparent;
//       color: #B3B3B3;
//       font-style: normal;
//       font-weight: 400;
//       font-size: 14px;
//       line-height: 21px;
//     }
//     .search__text-mob:-ms-input-placeholder {
//       background-color: transparent;
//       color: #B3B3B3;
//       font-style: normal;
//       font-weight: 400;
//       font-size: 14px;
//       line-height: 21px;
//     }
//     .search__text-mob::-ms-input-placeholder {
//       background-color: transparent;
//       color: #B3B3B3;
//       font-style: normal;
//       font-weight: 400;
//       font-size: 14px;
//       line-height: 21px;
//     }
//     .search__text-mob::placeholder {
//       background-color: transparent;
//       color: #B3B3B3;
//       font-style: normal;
//       font-weight: 400;
//       font-size: 14px;
//       line-height: 21px;
//     }
//     .search__btn {
//       display: none;
//     }
//     .cards {
//       display: -ms-grid;
//       display: grid;
//       -ms-grid-columns: (137px)[2];
//           grid-template-columns: repeat(2, 137px);
//       grid-auto-rows: 293px;
//       grid-gap: 10px 10px;
//       -webkit-box-pack: center;
//           -ms-flex-pack: center;
//               justify-content: center;
//     }
//     .cards__item {
//       margin: 0;
//       -webkit-box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
//               box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
//       border-radius: 6px;
//     }
//     .cards__card {
//       width: 137px;
//       height: 293px;
//       display: -webkit-box;
//       display: -ms-flexbox;
//       display: flex;
//       -webkit-box-orient: vertical;
//       -webkit-box-direction: normal;
//           -ms-flex-direction: column;
//               flex-direction: column;
//     }
//     .card__image {
//       border-top-left-radius: 6px;
//       border-top-right-radius: 6px;
//       width: 137px;
//       height: 132px;
//       background-color: #D9D9D9;
//     }
//     .card__image img {
//       width: 100%;
//       height: 100%;
//       display: block;
//       -o-object-fit: cover;
//          object-fit: cover;
//       border-top-left-radius: 6px;
//       border-top-right-radius: 6px;
//     }
//     .card__title {
//       height: 51px;
//       font-size: 14px;
//       line-height: 17px;
//       color: #009EE4;
//       margin-bottom: 10px;
//       margin-top: 10px;
//     }
//     .card__price {
//       font-size: 16px;
//       line-height: 24px;
//     }
//     .card__place, .card__date {
//       font-size: 12px;
//       line-height: 16px;
//       color: #5F5F5F;
//     }
//     .footer {
//       position: fixed;
//       bottom: 0;
//       left: 0;
//       z-index: 3;
//       display: -webkit-box;
//       display: -ms-flexbox;
//       display: flex;
//       -webkit-box-align: center;
//           -ms-flex-align: center;
//               align-items: center;
//       -webkit-box-pack: center;
//           -ms-flex-pack: center;
//               justify-content: center;
//       height: 54px;
//       width: 100%;
//       background-color: #FFFFFF;
//       -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
//               box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
//     }
//     .footer__container {
//       width: 225px;
//       display: -webkit-box;
//       display: -ms-flexbox;
//       display: flex;
//       -webkit-box-align: center;
//           -ms-flex-align: center;
//               align-items: center;
//       -webkit-box-pack: justify;
//           -ms-flex-pack: justify;
//               justify-content: space-between;
//     }
//     .footer__img {
//       width: 42px;
//       height: 42px;
//     }
//     .footer__img img {
//       width: 100%;
//       height: 100%;
//       display: block;
//       -o-object-fit: cover;
//          object-fit: cover;
//     }
//   }
