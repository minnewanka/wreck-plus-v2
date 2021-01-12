import React from "react";
import styled from "styled-components";
import DarkConstructor from "../../assets/images/albums/cover/dark-constructor.jpg";
import StarCrossed from "../../assets/images/albums/cover/starcrossed.jpg";
import OverWarLive from "../../assets/images/albums/cover/over-war-live.jpg";
import OverWarLive2 from "../../assets/images/albums/cover/over-war-live-2.jpg";
import Riding from "../../assets/images/albums/cover/riding.jpg";
import Roars from "../../assets/images/albums/cover/roars.jpg";
import Spies from "../../assets/images/albums/cover/spies.jpg";

const Section = styled.section`
  text-align: center;
  background-color: #191a1e;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
`;

const Img = styled.img`
  width: 100%;
  :hover {
    cursor: pointer;
  }
`;

const Text = styled.span``;

const Music: React.FC = () => {
  return (
    <Section>
      <div className="wrapper">
        <h1 className="section-title">Music</h1>
        <Grid>
          <Img src={DarkConstructor} alt=""></Img>
          <Img src={StarCrossed} alt="" />
          <Img src={OverWarLive} alt="" />
          <Img src={OverWarLive2} alt="" />
          <Img src={Riding} alt="" />
          <Img src={Spies} alt="" />
          <Img src={Roars} alt="" />
        </Grid>
      </div>
    </Section>
  );
};

export default Music;
