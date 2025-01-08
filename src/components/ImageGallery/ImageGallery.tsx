import React, { CSSProperties } from "react";
import Image from "next/image";
import Modal from "react-modal";
import styled from "styled-components";
import CloseButton from "./CloseButton";

interface ImageGalleryProps {
  image: any;
  isGalleryOpen: boolean;
  closeModal: () => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}
interface StylesDictionary {
  [Key: string]: CSSProperties;
}

const StyledModal = styled(Modal)`
  &:focus {
    outline: none;
  }
  img {
    max-height: 80vh;
    user-select: none;
  }
  .arrowLeft,
  .arrowRight {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    width: 28px;
    height: 56px;
    cursor: pointer;
  }
  .arrowLeft {
    left: 10vw;
  }
  .arrowRight {
    right: 10vw;
  }
`;

const ImageGallery: React.FC<ImageGalleryProps> = ({
  image,
  isGalleryOpen,
  closeModal,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}) => {
  const customStyles: StylesDictionary = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: 3000,
    },
    content: {
      position: "fixed", // to override default styles
      top: "null",
      left: "null",
      right: "null",
      bottom: "null",
      borderRadius: "none",
      fontSize: "18px",
      textAlign: "center",
      padding: 0,
      border: "none",
      maxWidth: "none",
    },
  };
  return (
    <StyledModal
      className="imageGallery"
      isOpen={isGalleryOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <Image src={image ? image.src : ""} alt="" fill />
      {hasPrevious && (
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onPrevious}
          className="arrowLeft"
        >
          <path d="M8 15L1 8L8 1" stroke="white" />
        </svg>
      )}

      {hasNext && (
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onNext}
          className="arrowRight"
        >
          <path d="M1 15L8 8L0.999999 1" stroke="white" />
        </svg>
      )}
      <CloseButton onClick={closeModal} />
    </StyledModal>
  );
};

export default ImageGallery;
