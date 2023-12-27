import { useEffect, useRef, useState } from "react";
import { addNewImage, deleteImages, editAds } from "../../../api/api";
import * as S from "./editMyAds.style";
import { ReactComponent as DelButton } from "../../assets/delButton.svg";
import { ReactComponent as CloseButton } from "../../assets/closeButton.svg";

export const EditMyAds = ({
  onClose,
  descAd,
  titleAd,
  priceAd,
  itemId,
  editmap,
  baseImagePath,
  setShouldUpdateAds,
}) => {
  const [title, setTitle] = useState(titleAd);
  const [description, setDescription] = useState(descAd);
  const [price, setPrice] = useState(priceAd);
  const [errorPrice, setErrorPrice] = useState(false);
  const [errorData, setErrorData] = useState(false);
  const [errorDataDesk, setErrorDataDesk] = useState(false);
  const [images, setImages] = useState(editmap?.map((ad) => ad.url) || []);

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const handleFileChange = async (event, index) => {
    const newFile = event.target.files[0];
    if (newFile) {
      try {
        const response = await addNewImage(itemId, newFile);
        setShouldUpdateAds(true);
        console.log("Successful");
      } catch (error) {
        console.error(
          "Error updating user data:",
          error.response?.data || error.message
        );
      }
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
    };
    console.log(newAd);
    try {
      await editAds(newAd, itemId);
      setShouldUpdateAds(true);
      onClose();
      console.log("User data updated successfully");
    } catch (error) {
      console.error(
        "Error updating user data:",
        error.response?.data || error.message
      );
    }
  };

  const handleDeletePhoto = async (event, index, imageId) => {
    event.stopPropagation();
    try {
      await deleteImages(itemId, imageId);
      console.log("successful");

      setImages((currentImages) => currentImages.filter((_, i) => i !== index));
    } catch (error) {
      console.error(
        "Error deleting user image:",
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
                <CloseButton />
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
                  {[0, 1, 2, 3, 4].map((index) => (
                    <S.Form__newArt_img
                      key={index}
                      onClick={() => inputRefs[index]?.current?.click()}
                    >
                      <div>
                        <input
                          multiple
                          type="file"
                          ref={inputRefs[index]}
                          style={{ display: "none" }}
                          onChange={(event) => handleFileChange(event, index)}
                        />
                      </div>
                      <S.div__img_but>
                        <div>
                          {images[index] ? (
                            <>
                              <img
                                src={baseImagePath + images[index]}
                                alt={`Image ${index}`}
                              />
                              <div
                                style={{
                                  position: "relative",
                                  textAlign: "center",
                                }}
                                onClick={(event) =>
                                  handleDeletePhoto(event, index, images[index])
                                }
                              >
                                <DelButton />
                              </div>
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                      </S.div__img_but>
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
                <S.Form__newArt__input_price_cover>
                  &#8381;
                </S.Form__newArt__input_price_cover>
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
