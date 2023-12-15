import { useState } from "react";
import { addNewReview } from "../../../api/api";
import * as S from "./reviews.style";

export const ReviewsComp = ({ onClose, reviews, baseImagePath, itemId }) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [newReview, setNewReview] = useState("");
  const [newReviewEmpty, setNewReviewEmpty] = useState("");

  const handleNewReview = (event) => {
    setNewReview(event.target.value);
  };

  const handleAddReview = async () => {
    if (newReview) {
      try {
        await addNewReview(itemId, newReview);
        setNewReview("");
      } catch (error) {
        console.error("Ошибка при добавлении отзыва:", error);
      }
    } else if (!newReview) {
      setNewReviewEmpty("Комментарий не может быть пустым");
      console.log("Review content is empty");
    }
  }
  return (
    <S.Wrapper>
      <S.Container__bg>
        <S.Modal__block>
          <S.Modal__content>
            <S.Modal__title onClick={onClose}>Отзывы о товаре</S.Modal__title>
            <S.Modal__btn_close>
              <S.Modal__btn_close_line onClick={onClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="43"
                  viewBox="0 0 43 43"
                  fill="none"
                >
                  <path
                    d="M31.8193 10.6066L10.6061 31.8198"
                    stroke="#D9D9D9"
                    strokeWidth="2"
                  />
                  <path
                    d="M31.8193 31.8198L10.6061 10.6066"
                    stroke="#D9D9D9"
                    strokeWidth="2"
                  />
                </svg>
              </S.Modal__btn_close_line>
            </S.Modal__btn_close>
            <S.Modal__scroll>
              {userData ? (
                <S.Modal__form_newArt>
                  <S.Form__newArt__block>
                    <label htmlFor="text">Добавить отзыв</label>
                    <textarea
                      autoFocus
                      name="text"
                      id="formArea"
                      cols="auto"
                      rows="5"
                      placeholder="Введите описание"
                      onChange={handleNewReview}
                    ></textarea>
                    <p>{newReviewEmpty}</p>
                  </S.Form__newArt__block>
                  <S.Form__newArt__btn_pub onClick={handleAddReview}>
                    Опубликовать
                  </S.Form__newArt__btn_pub>
                </S.Modal__form_newArt>
              ) : (
                ""
              )}
              <S.Modal__review>
                {reviews.map((review) => (
                  <S.Review__item key={review.itemid}>
                    <S.Review__left>
                      <S.Review__img>
                        <img src={baseImagePath + review.userAvatar} alt="" />
                      </S.Review__img>
                    </S.Review__left>
                    <S.Review__right>
                      <S.Review__name>
                        {review.userName} <span>{review.created}</span>
                      </S.Review__name>
                      <S.Review__title>Комментарий</S.Review__title>
                      <S.Review__text>{review.review}</S.Review__text>
                    </S.Review__right>
                  </S.Review__item>
                ))}
              </S.Modal__review>
            </S.Modal__scroll>
          </S.Modal__content>
        </S.Modal__block>
      </S.Container__bg>
    </S.Wrapper>
  );
};
