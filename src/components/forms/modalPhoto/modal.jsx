import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

const ModalWrapper = styled.div`
  /* Стили для модального окна */
`;

const ModalContent = styled.div`



  .ReactModal__Content--after-open & {
    position: absolute;
    display: flex;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    max-width: 100%;
    max-height: 100%;
    -webkit-user-select: none;
    user-select: none;
    justify-content: center;

  }
  img{
    width: 900px;
    height: 680px;
    object-fit: cover;
}
button{
    height: 680px;
    width: 60px;
    border: none;
    background-color: #68a2c04a;
    position: relative;
    cursor: pointer;
    background-image: url('../assets/2c330610a01b0520.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    &:hover {
        background-color: #0080c1;
      }
}

  @media screen and (max-width: 600px) {
    img {
      width: 100%; 
      height: auto; 
    }

    button {
      width: 40px; 
      height: 50px; 
    }
  }
}
`;

const CustomModal = styled(Modal)`
  .ReactModal__Overlay--after-open & {
    inset: 0px;
    background-color: rgb(225 223 223 / 75%);
  }
  &.ReactModal__Content--after-open {
  }
`;

export const CustomModalComponent = ({
  isOpen,
  onClose,
  imageUrl,
  next,
  back,
}) => {
  return (
    <CustomModal isOpen={isOpen} onRequestClose={onClose}>
      <ModalWrapper>
        <ModalContent>
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
        </ModalContent>
      </ModalWrapper>
    </CustomModal>
  );
};
