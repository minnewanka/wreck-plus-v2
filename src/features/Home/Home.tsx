import React from "react";
import styled from "styled-components";

import { Band, Music, Follow, Video, Show } from "../../features";
import Img from "../../assets/images/hero-unit.jpg";
import Img2 from "../../assets/images/hero-unit-2.jpg";

const HeroUnit = styled.div<{ img: string }>`
  background-image: url(${(props) => props.img});
  height: 100vh;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Home: React.FC = () => {
  return (
    <>
      <Video />
      <Band />
      <HeroUnit img={Img} />
      <Music />
      <HeroUnit img={Img2} />
      <Show />
      {/* <HeroUnit img={Img3} /> */}
      <Follow />
    </>
  );
};

export default Home;
