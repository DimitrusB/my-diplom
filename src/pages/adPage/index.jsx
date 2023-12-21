import { Link, useNavigate, useParams } from "react-router-dom";
import * as S from "./adPage.style";
import * as A from "../../components/assets/style";
import { deleteAd, GetAdsByID, GetAllReview } from "../../api/api";
import { useEffect, useState } from "react";
import { AddNewAd } from "../../components/forms/addNewAt";
import { ReactComponent as SpinAnimation } from "../../components/assets/Spin-0.9s-301px.svg";
import { FooterComp } from "../../components/forms/footer";
import { ReviewsComp } from "../../components/forms/reviews";
import { EditMyAds } from "../../components/forms/editMyAds";
import { CustomModalComponent } from "../../components/forms/modalPhoto/modal";
import Modal from "react-modal";
import { useSwipeable } from "react-swipeable";

export const AdPage = () => {
  const { itemId } = useParams();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();
  const [values, setValues] = useState([]);
  const baseImagePath = "http://localhost:8090/";
  const [selectedImage, setSelectedImage] = useState("");
  const [myAdPage, setMyAdPage] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [numberUser, setNumberUser] = useState(true);
  const [phone, SetPhone] = useState();
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState(true);
  const [isModalReview, setModalReview] = useState(false);
  const [isModalEditVisible, setModalEditVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleButtonClickForward(),
    onSwipedRight: () => handleButtonClickBack(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
  });

  useEffect(() => {
    Modal.setAppElement("#root"); // Здесь '#root' - это селектор вашего корневого элемента приложения.
  }, []);

  const openModal = () => {
    if (window.innerWidth > 600) {
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(values.images[0].url);
  };

  const handleButtonViewPhone = () => {
    setNumberUser(false);
  };

  const handleButtonClick = () => {
    if (userData) {
      setModalVisible(true);
    } else {
      navigate("/auth");
    }
  };

  const handleButtonClickEdit = () => {
    if (userData) {
      setModalEditVisible(true);
    } else {
      navigate("/auth");
    }
  };

  const handleButtonReview = () => {
    setModalReview(true);
  };

  useEffect(() => {
    setLoading(true);
    GetAdsByID(itemId)
      .then((data) => {
        setValues(data);
        SetPhone(data.user.phone);
        if (data && data.images && data.images.length > 0) {
          setSelectedImage(data.images[0].url);
        }
        if (userData?.email === data?.user?.email) {
          setMyAdPage(true);
        }
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClickForward = () => {
    if (currentIndex < values.images.length - 1) {
      const nextIndex = currentIndex + 1;
      const nextImage = values.images[nextIndex].url;
      setSelectedImage(nextImage);
      setCurrentIndex(nextIndex);
    } else {
      setSelectedImage(values.images[0].url);
      setCurrentIndex(0);
    }
  };

  const handleButtonClickBack = () => {
    if (currentIndex > 0) {
      const nextIndex = currentIndex - 1;
      const nextImage = values.images[nextIndex].url;
      setSelectedImage(nextImage);
      setCurrentIndex(nextIndex);
    } else {
      const nextIndex = values.images.length - 1;
      const nextImage = values.images[nextIndex].url;
      setSelectedImage(nextImage);
      setCurrentIndex(nextIndex);
    }
  };

  const handleDeleteAd = () => {
    deleteAd(itemId);
    navigate("/profile");
  };

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };

  useEffect(() => {
    GetAllReview(itemId).then((data) => {
      setComments(data);
    });
  }, [itemId]);

  if (loading) {
    return (
      <A.animSet>
        <SpinAnimation />
      </A.animSet>
    );
  }

  const ClickEnterAuth = () => {
    if (!userData) {
      navigate("/auth");
    } else {
      navigate("/profile");
    }
  };

  const handleClick = (e) => {
    const target = e.target;
    if (
      window.innerWidth < 600 &&
      e.nativeEvent.offsetX >= 32 &&
      e.nativeEvent.offsetX <= 55 &&
      e.nativeEvent.offsetY >= 24 &&
      e.nativeEvent.offsetY <= 47
    ) {
      console.log("сработал");
      navigate("/");
    }
  };

  const commentCount = comments.length;
  let commentString = "";
  if (commentCount === undefined) {
    commentString = "";
  } else if (commentCount === 1) {
    commentString = `${commentCount} отзыв`;
  } else if (commentCount >= 2 && commentCount <= 4) {
    commentString = `${commentCount} отзыва`;
  } else if (commentCount === 0) {
    commentString = "Нет отзывов";
  } else {
    commentString = `${commentCount} отзывов`;
  }

  return (
    <S.Wrapper>
      {isModalEditVisible && (
        <EditMyAds
          onClose={() => setModalEditVisible(false)}
          titleAd={values.title}
          descAd={values.description}
          priceAd={values.price}
          itemId={itemId}
          editmap={values.images}
          baseImagePath={baseImagePath}
        />
      )}
      {isModalVisible && <AddNewAd onClose={() => setModalVisible(false)} />}
      {isModalReview && (
        <ReviewsComp
          onClose={() => setModalReview(false)}
          reviews={
            comments &&
            comments.map((comment) => ({
              itemid: comment.id,
              userName: comment.author.name,
              created: comment.created_on.split("T")[0],
              review: comment.text,
              userAvatar: comment.author.avatar,
            }))
          }
          baseImagePath={baseImagePath}
          itemId={itemId}
        />
      )}
      <S.Container>
        <S.Header>
          <S.Header__nav>
            <S.Header__Logo>
              <S.Logo__MobLink href="" target="_blank">
                <S.Logo__MobImg
                  src={`${process.env.PUBLIC_URL}/img/logo-mob.png`}
                  alt="logo"
                />
              </S.Logo__MobLink>
            </S.Header__Logo>
            <S.Header__BtnputAd onClick={handleButtonClick}>
              Разместить объявление
            </S.Header__BtnputAd>
            <S.Header__BtnLk onClick={ClickEnterAuth}>
              Личный кабинет
            </S.Header__BtnLk>
          </S.Header__nav>
        </S.Header>
        <main>
          <S.Maincontainer>
            <S.Main__Menu>
              <S.Menu__LogoLink>
                <Link to="/">
                  <S.Menu__LogoImg
                    src={`${process.env.PUBLIC_URL}/img/logo.png`}
                    alt="logo"
                  />
                </Link>
              </S.Menu__LogoLink>
              <S.Menu__Form>
                <Link to="/">
                  <S.Menu__Btn>Вернуться на главную</S.Menu__Btn>
                </Link>
              </S.Menu__Form>
            </S.Main__Menu>
          </S.Maincontainer>

          <S.Main__artic>
            <S.Artic__content>
              <S.Article__left>
                <S.Article__fillImg onClick={handleClick}>
                  <S.Article__img {...handlers} onClick={openModal}>
                    <img
                      src={selectedImage ? baseImagePath + selectedImage : ""}
                      alt="Selected ad"
                    />
                  </S.Article__img>
                  <CustomModalComponent
                    isOpen={modalIsOpen}
                    onClose={closeModal}
                    imageUrl={baseImagePath + selectedImage}
                    next={handleButtonClickForward}
                    back={handleButtonClickBack}
                  />

                  <S.Article__imgBar>
                    {values &&
                      values.images &&
                      values.images.map((item, index) => (
                        <S.Article__imgBarDiv
                          key={item.id}
                          onClick={() => handleImageClick(item.url)}
                        >
                          <img
                            src={baseImagePath + item.url}
                            alt={item.alt || "Ad image"}
                          />
                        </S.Article__imgBarDiv>
                      ))}
                  </S.Article__imgBar>

                  <S.Article__imgBarMob>
                    {values.images.map((item, index) => (
                      <S.imgBarMob__circle
                        key={index}
                        className={index === currentIndex ? "active" : ""}
                      ></S.imgBarMob__circle>
                    ))}
                  </S.Article__imgBarMob>
                </S.Article__fillImg>
              </S.Article__left>
              {values && (
                <S.Article__right>
                  <S.Article__block>
                    <S.Article__title>{values.title}</S.Article__title>
                    <S.Article__info>
                      <S.Article__date>
                        {values.created_on?.split("T")[0]}
                      </S.Article__date>
                      <S.Article__city>{values.user?.city}</S.Article__city>
                      <S.Article__link onClick={handleButtonReview}>
                        {commentString}
                      </S.Article__link>
                    </S.Article__info>
                    <S.Article__price>{values.price} ₽</S.Article__price>
                    {!myAdPage ? (
                      <S.Article__btn onClick={handleButtonViewPhone}>
                        <div>Показать телефон</div>
                        <span>
                          {numberUser
                            ? (phone?.slice(0, -7) ?? "") + "ХХХ ХХ ХХ"
                            : phone}
                        </span>
                      </S.Article__btn>
                    ) : (
                      <S.Article__btnDiv>
                        <S.Article__btn onClick={handleButtonClickEdit}>
                          <span>Редактировать</span>
                        </S.Article__btn>
                        <S.Article__btn onClick={handleDeleteAd}>
                          <span>Снять с публикации</span>
                        </S.Article__btn>
                      </S.Article__btnDiv>
                    )}
                    <S.Article__author>
                      <S.Author__img>
                        <img src={baseImagePath + values.user?.avatar} alt="" />
                      </S.Author__img>
                      <S.Author__cont>
                        <Link to={`/profileSellers/${values.user?.id}`}>
                          <S.Author__name>{values.user?.name}</S.Author__name>
                        </Link>
                        <S.Author__about>
                          Продает товары с{" "}
                          {values.user?.sells_from.split("T")[0]}
                        </S.Author__about>
                      </S.Author__cont>
                    </S.Article__author>
                  </S.Article__block>
                </S.Article__right>
              )}
            </S.Artic__content>
          </S.Main__artic>

          <S.Maincontainer>
            <S.Main__title>Описание товара</S.Main__title>
            <S.Main__content>
              <S.Main__text>{values.description}</S.Main__text>
            </S.Main__content>
          </S.Maincontainer>
        </main>

        <FooterComp ButtonClick={handleButtonClick} />
      </S.Container>
    </S.Wrapper>
  );
};
