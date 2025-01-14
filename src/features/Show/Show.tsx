import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useScreenClass } from "react-grid-system";
import { ImageGallery } from "../../components";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import useModal from "../../hooks/modal";
import "react-multi-carousel/lib/styles.css";

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
    { id: 0, src: "/images/shows/artwork-1.jpg" },
    { id: 1, src: "/images/shows/artwork-2.jpg" },
    { id: 2, src: "/images/shows/artwork-3.jpg" },
    { id: 3, src: "/images/shows/artwork-4.jpg" },
    { id: 4, src: "/images/shows/artwork-5.jpg" },
    { id: 5, src: "/images/shows/artwork-6.jpg" },
    { id: 6, src: "/images/shows/artwork-7.jpg" },
    { id: 7, src: "/images/shows/artwork-8.jpg" },
    { id: 8, src: "/images/shows/artwork-9.jpg" },
    { id: 9, src: "/images/shows/artwork-10.jpg" },
    { id: 10, src: "/images/shows/artwork-11.jpg" },
    { id: 11, src: "/images/shows/artwork-12.jpg" },
    { id: 12, src: "/images/shows/artwork-13.jpg" },
    { id: 13, src: "/images/shows/artwork-14.jpg" },
    { id: 14, src: "/images/shows/artwork-15.jpg" },
    { id: 15, src: "/images/shows/artwork-16.jpg" },
    { id: 16, src: "/images/shows/artwork-17.jpg" },
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
