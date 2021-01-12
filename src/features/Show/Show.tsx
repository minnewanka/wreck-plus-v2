import React, { useState, useEffect } from "react";
import { ImageGallery } from "../../components";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import useModal from "../../hooks/modal";
import "react-multi-carousel/lib/styles.css";
import FirstEnd from "../../assets/images/shows/Firstend.jpg";
import Gambetta from "../../assets/images/shows/Gambetta.jpg";
import Gibus from "../../assets/images/shows/Gibus.jpg";
import Hangar from "../../assets/images/shows/Hangar.jpg";

const Section = styled.section`
  text-align: center;
  background-color: #191a1e;
  padding: 5rem 1rem;
`;

const Img = styled.img`
  max-width: 100%;
`;

const Show: React.FC = () => {
  const { isOpen, openModal, closeModal } = useModal(false);
  const [images, setImages] = useState([]);
  const [curentImageId, setCurrentImageId] = useState(0);
  const hasPrevious = curentImageId > 0;
  const hasNext = curentImageId < images.length - 1;

  const data = [
    { id: 0, src: FirstEnd },
    { id: 1, src: Gambetta },
    { id: 2, src: Gibus },
    { id: 3, src: Hangar },
  ];

  const openGallery = (pImages: any, pImageId: number) => {
    setImages(pImages);
    setCurrentImageId(pImageId);
    openModal();
  };

  const onPrevious = () => {
    if (hasPrevious) {
      setCurrentImageId(curentImageId - 1);
    }
  };
  const onNext = () => {
    if (hasNext) {
      setCurrentImageId(curentImageId + 1);
    }
  };
  const handleOnKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === 37) {
      onPrevious();
    }
    if (e.keyCode === 39) {
      onNext();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleOnKeyDown);
    return () => document.removeEventListener("keydown", handleOnKeyDown);
  });

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Section>
      <h1 className="section-title">Shows</h1>
      <Carousel responsive={responsive} itemClass="image-item">
        {data.map((item) => (
          <Img
            key={`shows${item.id} `}
            src={item.src}
            alt=""
            onClick={() => openGallery(data, item.id)}
          />
        ))}
      </Carousel>
      <ImageGallery
        closeModal={closeModal}
        onPrevious={onPrevious}
        onNext={onNext}
        image={images[curentImageId]}
        isGalleryOpen={isOpen}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
      />
    </Section>
  );
};

export default Show;
