import { useEffect, useRef, useState } from "react";
import { addNewImage, deleteImages, editAds } from "../../../api/api";
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
  const [title, setTitle] = useState(titleAd);
  const [description, setDescription] = useState(descAd);
  const [price, setPrice] = useState(priceAd);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorPrice, setErrorPrice] = useState(false);
  const [errorData, setErrorData] = useState(false);
  const [errorDataDesk, setErrorDataDesk] = useState(false);
  const [images, setImages] = useState(editmap?.map((ad) => ad.url) || []);
  const [previewImage, setPreviewImage] = useState([]);

  console.log(images);
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

        const newPreviewImages = [...previewImage];
        newPreviewImages[index] = URL.createObjectURL(newFile);

        setSelectedFiles((prevSelectedFiles) => {
          const updatedSelectedFiles = [...prevSelectedFiles];
          updatedSelectedFiles[index] = newFile;
          return updatedSelectedFiles;
        });

        const response = await addNewImage(itemId, newFile); 
        const imageUrl = response.imageUrl;
        console.log(newFile);
        console.log("Successful");

        setPreviewImage(newPreviewImages);
        setImages((prevImages) => [...prevImages, imageUrl]);
      } catch (error) {
        console.error(
          "Error updating user data:",
          error.response?.data || error.message
        );
      }
    }
  };

  useEffect(() => {
    return () => {
      previewImage.forEach((previewImage) => {
        if (previewImage) {
          URL.revokeObjectURL(previewImage);
        }
      });
    };
  }, [previewImage]);

  console.log(previewImage);

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

  const handleDeletePhoto = (index, imageid) => {
    try {
      deleteImages(itemId, imageid);
      console.log("saccesful");
    } catch (error) {
      console.error(
        "Error updating user data:",
        error.response?.data || error.message
      );
    }
  };

  const handleAddPhoto = async () => {
    if (selectedFiles) {
      try {
        await addNewImage(itemId, selectedFiles[0]);
        console.log(selectedFiles);
        console.log("Successful");
      } catch (error) {
        console.error(
          "Error updating user data:",
          error.response?.data || error.message
        );
      }
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
                        {/* {selectedFiles && selectedFiles[index] && (
                          <p>{selectedFiles[index].name}</p>
                        )} */}
                      </div>
                      <S.div__img_but>
                        <div>
                          {previewImage[index] ? (
                            <>
                              <img
                                src={previewImage[index]}
                                alt={`Preview ${index}`}
                              />{" "}
                              <div
                                style={{ position: "relative", textAlign: "center" }}
                                onClick={() =>
                                  handleDeletePhoto(index, images[index])
                                }
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 43 43"
                                  fill="none"
                                >
                                  <path
                                    d="M31.8193 10.6066L10.6061 31.8198"
                                    stroke="#6e6b6b"
                                    strokeWidth="2"
                                  />
                                  <path
                                    d="M31.8193 31.8198L10.6061 10.6066"
                                    stroke="#6e6b6b"
                                    strokeWidth="2"
                                  />
                                </svg>
                              </div>
                            </>
                          ) : images[index] ? (
                            <>
                              <img
                                src={baseImagePath + images[index]}
                                alt={`Image ${index}`}
                              />
                              <div
                                style={{ position: "relative", textAlign: "center" }}
                                onClick={() =>
                                  handleDeletePhoto(index, images[index])
                                }
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 43 43"
                                  fill="none"
                                >
                                  <path
                                    d="M31.8193 10.6066L10.6061 31.8198"
                                    stroke="#6e6b6b"
                                    strokeWidth="2"
                                  />
                                  <path
                                    d="M31.8193 31.8198L10.6061 10.6066"
                                    stroke="#6e6b6b"
                                    strokeWidth="2"
                                  />
                                </svg>
                              </div>
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                        <div
                          style={{ position: "relative" }}
                          onClick={() =>
                            handleDeletePhoto(index, images[index])
                          }
                        ></div>
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
              {/* <button onClick={handleAddPhoto}>добавить</button> */}
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
