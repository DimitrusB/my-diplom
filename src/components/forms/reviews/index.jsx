import * as S from "./reviews.style";

export const ReviewsComp = ({ onClose, userName, created, review, userAvatar }) => {
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
              <S.Modal__form_newArt>
                <S.Form__newArt__block>
                  <label for="text">Добавить отзыв</label>
                  <textarea
                    class="form-newArt__area"
                    name="text"
                    id="formArea"
                    cols="auto"
                    rows="5"
                    placeholder="Введите описание"
                  ></textarea>
                </S.Form__newArt__block>
                <S.Form__newArt__btn_pub>Опубликовать</S.Form__newArt__btn_pub>
              </S.Modal__form_newArt>

              <S.Modal__review>
                <S.Reviews__review>
                  <S.Review__item>
                    <S.Review__left>
                      <S.Review__img>
                        <img src={userAvatar} alt="" />
                      </S.Review__img>
                    </S.Review__left>
                    <S.Review__right>
                      <S.Review__name>
                        {userName} <span>{created}</span>
                      </S.Review__name>
                      <S.Review__title>Комментарий</S.Review__title>
                      <S.Review__text>{review}</S.Review__text>
                    </S.Review__right>
                  </S.Review__item>
                </S.Reviews__review>
              </S.Modal__review>
            </S.Modal__scroll>
          </S.Modal__content>
        </S.Modal__block>
      </S.Container__bg>
    </S.Wrapper>
  );
};
