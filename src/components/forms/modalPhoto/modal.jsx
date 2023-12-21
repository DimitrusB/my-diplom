import React from "react";
import * as S from "./modal.style"
export const CustomModalComponent = ({
  isOpen,
  onClose,
  imageUrl,
  next,
  back,
}) => {
  return (
    <S.CustomModal isOpen={isOpen} onRequestClose={onClose}>
      <S.ModalWrapper>
        <S.ModalContent>
          <button onClick={back}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M338 419L175 256L338 93"
                stroke="black"
                strokeWidth="24"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <img src={imageUrl} alt="Selected ad" />
          <button onClick={next}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M175 419L338 256L175 93"
                stroke="black"
                strokeWidth="24"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </S.ModalContent>
      </S.ModalWrapper>
    </S.CustomModal>
  );
};
