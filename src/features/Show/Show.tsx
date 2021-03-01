import React, { useState, useEffect } from "react";
import { useScreenClass } from "react-grid-system";
import { ImageGallery } from "../../components";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import useModal from "../../hooks/modal";
import "react-multi-carousel/lib/styles.css";
import Artwork1 from "../../assets/images/shows/artwork-1.jpg";
import Artwork2 from "../../assets/images/shows/artwork-2.jpg";
import Artwork3 from "../../assets/images/shows/artwork-3.jpg";
import Artwork4 from "../../assets/images/shows/artwork-4.jpg";
import Artwork5 from "../../assets/images/shows/artwork-5.jpg";
import Artwork6 from "../../assets/images/shows/artwork-6.jpg";
import Artwork7 from "../../assets/images/shows/artwork-7.jpg";
import Artwork8 from "../../assets/images/shows/artwork-8.jpg";
import Artwork9 from "../../assets/images/shows/artwork-9.jpg";
import Artwork10 from "../../assets/images/shows/artwork-10.jpg";
import Artwork11 from "../../assets/images/shows/artwork-11.jpg";
import Artwork12 from "../../assets/images/shows/artwork-12.jpg";
import Artwork13 from "../../assets/images/shows/artwork-13.jpg";
import Artwork14 from "../../assets/images/shows/artwork-14.jpg";
import Artwork15 from "../../assets/images/shows/artwork-15.jpg";
import Artwork16 from "../../assets/images/shows/artwork-16.jpg";
import Artwork17 from "../../assets/images/shows/artwork-17.jpg";

const Section = styled.section`
  text-align: center;
  background-color: #191a1e;
`;

const Img = styled.img`
  max-width: 100%;
  :hover {
    cursor: pointer;
  }
`;

const Show: React.FC = () => {
  const { isOpen, openModal, closeModal } = useModal(false);
  const screenClass = useScreenClass();
  const [images, setImages] = useState([]);
  const [curentImageId, setCurrentImageId] = useState(0);
  const hasPrevious = curentImageId > 0;
  const hasNext = curentImageId < images.length - 1;

  const data = [
    { id: 0, src: Artwork1 },
    { id: 1, src: Artwork2 },
    { id: 2, src: Artwork3 },
    { id: 3, src: Artwork4 },
    { id: 4, src: Artwork5 },
    { id: 5, src: Artwork6 },
    { id: 6, src: Artwork7 },
    { id: 7, src: Artwork8 },
    { id: 8, src: Artwork9 },
    { id: 9, src: Artwork10 },
    { id: 10, src: Artwork11 },
    { id: 11, src: Artwork12 },
    { id: 12, src: Artwork13 },
    { id: 13, src: Artwork14 },
    { id: 14, src: Artwork15 },
    { id: 15, src: Artwork16 },
    { id: 16, src: Artwork17 },
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
      items: 6,
      slidesToSlide: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Section id="shows">
      <h1 className="section-title">Shows</h1>
      <Carousel responsive={responsive} itemClass="image-item">
        {data.map((item) => (
          <Img
            key={`shows${item.id} `}
            src={item.src}
            alt=""
            onClick={
              ["lg", "xl", "xxl"].includes(screenClass)
                ? () => openGallery(data, item.id)
                : undefined
            }
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
