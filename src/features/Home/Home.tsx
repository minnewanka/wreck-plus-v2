import React from "react";
import styled from "styled-components";
import { Hidden } from "react-grid-system";

import { Band, Music, Video, Show } from "../../features";
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
      <Hidden xs sm>
        <HeroUnit img={Img} />
      </Hidden>
      <Music />
      <Hidden xs sm>
        <HeroUnit img={Img2} />
      </Hidden>
      <Show />
    </>
  );
};

export default Home;
