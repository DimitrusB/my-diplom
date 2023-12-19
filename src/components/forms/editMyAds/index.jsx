import { useRef, useState } from "react";
import { editAds } from "../../../api/api";
import * as S from "./editMyAds.style";

export const EditMyAds = ({
  onClose,
  descAd,
  titleAd,
  priceAd,
  itemId,
  editmap,
  baseImagePath,
}) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [title, setTitle] = useState(titleAd);
  const [description, setDescription] = useState(descAd);
  const [price, setPrice] = useState(priceAd);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorPrice, setErrorPrice] = useState(false);
  const [errorData, setErrorData] = useState(false);
  const [errorDataDesk, setErrorDataDesk] = useState(false);

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleFileChange = (event, buttonIndex) => {
    const files = event.target.files;
    const newFiles = Array.from(files).slice(0, 5);

    if (selectedFiles.length + newFiles.length <= 5) {
      setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    } else {
      console.log("Превышено максимальное количество файлов (5).");
    }
  };

  const handleAddNewAd = async (e) => {
    e.preventDefault();

    if (isNaN(price) || price === "") {
      setErrorPrice(true);
      return;
    } else {
      setErrorPrice(false);
      setPrice(price);
    }

    if (title === "") {
      setErrorData(true);
      return;
    } else {
      setErrorData(false);
      setTitle(title);
    }

    if (description === "") {
      setErrorDataDesk(true);
      return;
    } else {
      setErrorDataDesk(false);
      setDescription(description);
    }

    const newAd = {
      title,
      description,
      price,

      files: selectedFiles,
    };
    console.log(newAd);
    try {
      await editAds(newAd, itemId);
      onClose();
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
            <S.Modal__title onClick={onClose}>
              Редактировать объявление
            </S.Modal__title>
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
                  value={title}
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
                  value={description}
                />
                <p style={{ color: "red" }}>
                  {errorDataDesk ? "Необходимо заполнить" : ""}
                </p>
              </S.Form__NewArt_block>
              <S.Form__NewArt_block>
                <S.Form__newArt_p>
                  Фотографии товара<span>не более 5 фотографий</span>
                </S.Form__newArt_p>
                <S.Form__newArt__bar_img>
                  {editmap.map((ads, index) => (
                    <S.Form__newArt_img
                      key={index}
                      onClick={() => inputRefs[index].current.click()}
                    >
                      <div>
                        <input
                          type="file"
                          ref={inputRefs[index]}
                          style={{ display: "none" }}
                          onChange={(event) => handleFileChange(event, index)}
                        />
                        {selectedFiles && selectedFiles[index] && (
                          <p>{selectedFiles[index].name}</p>
                        )}
                      </div>
                      <img src={baseImagePath + ads.url} alt="" />
                      <S.Form__newArt_img_cover></S.Form__newArt_img_cover>
                    </S.Form__newArt_img>
                  ))}
                </S.Form__newArt__bar_img>
              </S.Form__NewArt_block>
              <S.Form__NewArt_block_price>
                <label htmlFor="price">Цена</label>
                <S.Form__newArt__input_price
                  type="text"
                  name="price"
                  onChange={(e) => setPrice(e.target.value)}
                  onBlur={handleBlur}
                  value={price}
                />
                <S.Form__newArt__input_price_cover>&#8381;</S.Form__newArt__input_price_cover>
              </S.Form__NewArt_block_price>
              <p style={{ color: "red" }}>
                  {errorPrice ? "Должно быть число" : ""}
                </p>
              <S.Form__newArt__btn_pub onClick={handleAddNewAd}>
                Сохранить
              </S.Form__newArt__btn_pub>
            </S.Modal__form_newArt>
          </S.Modal__content>
        </S.Modal__block>
      </S.Container__bg>
    </S.Wrapper>
  );
};
