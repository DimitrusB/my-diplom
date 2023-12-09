import * as S from "./addNewat.style";

export const AddNewAt = ({ onClose }) => {
  return (
    <S.Wrapper>
      <S.Container__bg>
        <S.Modal__block>
          <S.Modal__content>
            <S.Modal__title onClick={onClose}>Новое объявление</S.Modal__title>
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
                    stroke-width="2"
                  />
                  <path
                    d="M31.8193 31.8198L10.6061 10.6066"
                    stroke="#D9D9D9"
                    stroke-width="2"
                  />
                </svg>
              </S.Modal__btn_close_line>
            </S.Modal__btn_close>
            <S.Modal__form_newArt action="#">
              <S.Form__NewArt_block>
                <label for="name">Название</label>
                <S.Form__newArt_input
                  type="text"
                  name="name"
                  id="formName"
                  placeholder="Введите название"
                />
              </S.Form__NewArt_block>
              <S.Form__NewArt_block>
                <label for="text">Описание</label>
                <S.Form__newArt_Area
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="auto"
                  placeholder="Введите описание"
                ></S.Form__newArt_Area>
              </S.Form__NewArt_block>
              <S.Form__NewArt_block>
                <S.Form__newArt_p>
                  Фотографии товара<span>не более 5 фотографий</span>
                </S.Form__newArt_p>
                <S.Form__newArt__bar_img>
                  <S.Form__newArt_img>
                    <img src="" alt="" />
                    <S.Form__newArt_img_cover></S.Form__newArt_img_cover>
                  </S.Form__newArt_img>
                  <S.Form__newArt_img>
                    <img src="" alt="" />
                    <S.Form__newArt_img_cover></S.Form__newArt_img_cover>
                  </S.Form__newArt_img>
                  <S.Form__newArt_img>
                    <S.Form__newArt_img_cover></S.Form__newArt_img_cover>
                    <img src="" alt="" />
                  </S.Form__newArt_img>
                  <S.Form__newArt_img>
                    <S.Form__newArt_img_cover></S.Form__newArt_img_cover>
                    <img src="" alt="" />
                  </S.Form__newArt_img>
                  <S.Form__newArt_img>
                    <S.Form__newArt_img_cover></S.Form__newArt_img_cover>
                    <img src="" alt="" />
                  </S.Form__newArt_img>
                </S.Form__newArt__bar_img>
              </S.Form__NewArt_block>
              <S.Form__NewArt_block_price>
                <label for="price">Цена</label>
                <S.Form__newArt__input_price
                  type="text"
                  name="price"
                  id="formName"
                />
                <S.Form__newArt__input_price_cover></S.Form__newArt__input_price_cover>
              </S.Form__NewArt_block_price>

              <S.Form__newArt__btn_pub>Опубликовать</S.Form__newArt__btn_pub>
            </S.Modal__form_newArt>
          </S.Modal__content>
        </S.Modal__block>
      </S.Container__bg>
    </S.Wrapper>
  );
};
