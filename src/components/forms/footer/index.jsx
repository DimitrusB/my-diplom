import { Link, useNavigate } from "react-router-dom";
import * as S from "./footer.style";

export const FooterComp = ({ ButtonClick }) => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));

  const ClickEnterAuth = () => {
    if (!userData) {
      navigate("/auth");
    } else {
      navigate("/profile");
    }
  };


  return (
    <S.Footer>
      <S.Footer__Container>
        <S.Footer__Img>
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/img/icon_01.png`} alt="home" />
          </Link>
        </S.Footer__Img>
        <S.Footer__Img onClick={ButtonClick}>
          <img src={`${process.env.PUBLIC_URL}/img/icon_02.png`} alt="add" />
        </S.Footer__Img>
        <S.Footer__Img onClick={ClickEnterAuth}>
            <img src={`${process.env.PUBLIC_URL}/img/icon_03.png`} alt="home" />
        </S.Footer__Img>
      </S.Footer__Container>
    </S.Footer>
  );
};
