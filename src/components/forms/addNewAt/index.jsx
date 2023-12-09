import { useState } from "react";
import { addNewAd, addNewAdwithPhoto } from "../../../api/api";
import * as S from "./addNewat.style";

export const AddNewAd = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorprice, setErrorPrice] = useState(false);
  const [errorData, setErrorData] = useState(false);
  const [errorDataDesk, setErrorDataDesk] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  console.log(selectedFile);
  const handleAddNewAd = async (e) => {
    e.preventDefault();

    if (isNaN(price)) {
      setPrice(price);
      setErrorPrice(true);
    } else {
      setErrorPrice(false);
    }

    if (title === "") {
      setErrorData(true);
    } else {
      setErrorData(false);
    }

    if (description === "") {
      setErrorDataDesk(true);
    } else {
      setErrorDataDesk(false);
    }

    const newAd = {
      title,
      description,
      price,
      files: selectedFile,
    };

    console.log(newAd);

    try {
      if (selectedFile) {
        await addNewAdwithPhoto(newAd);
      } else {
        await addNewAd(newAd);
      }
      //   window.location.reload();
      console.log("User data updated successfully");
    } catch (error) {
      console.error(
        "Error updating user data:",
        error.response?.data || error.message
      );
    }
  };

  const handleBlur = () => {
    setErrorPrice(false);
    setErrorData(false);
    setErrorDataDesk(false);
  };

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
            <S.Modal__form_newArt action="#">
              <S.Form__NewArt_block>
                <label htmlFor="name">Название</label>
                <S.Form__newArt_input
                  type="text"
                  name="name"
                  id="formName"
                  placeholder="Введите название"
                  onChange={(e) => setTitle(e.target.value)}
                  onBlur={handleBlur}
                />
                <p style={{ color: "red" }}>
                  {errorData ? "Необходимо заполнить" : ""}
                </p>
              </S.Form__NewArt_block>
              <S.Form__NewArt_block>
                <label htmlFor="text">Описание</label>
                <S.Form__newArt_Area
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="auto"
                  placeholder="Введите описание"
                  onChange={(e) => setDescription(e.target.value)}
                  onBlur={handleBlur}
                ></S.Form__newArt_Area>
                <p style={{ color: "red" }}>
                  {errorDataDesk ? "Необходимо заполнить" : ""}
                </p>
              </S.Form__NewArt_block>
              <S.Form__NewArt_block>
                <S.Form__newArt_p>
                  Фотографии товара<span>не более 5 фотографий</span>
                </S.Form__newArt_p>
                <S.Form__newArt__bar_img>
                  <S.Form__newArt_img>
                    <div>
                      <input type="file" onChange={handleFileChange} />
                    </div>
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
                <label htmlFor="price">Цена</label>
                <S.Form__newArt__input_price
                  type="text"
                  name="price"
                  id="formName"
                  onChange={(e) => setPrice(e.target.value)}
                  onBlur={handleBlur}
                />
                <S.Form__newArt__input_price_cover></S.Form__newArt__input_price_cover>
                <p style={{ color: "red" }}>
                  {errorprice ? "Должно быть число" : ""}
                </p>
              </S.Form__NewArt_block_price>
              <S.Form__newArt__btn_pub onClick={handleAddNewAd}>
                Опубликовать
              </S.Form__newArt__btn_pub>
            </S.Modal__form_newArt>
          </S.Modal__content>
        </S.Modal__block>
      </S.Container__bg>
    </S.Wrapper>
  );
};