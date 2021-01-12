import React from "react";
import styled from "styled-components";
import Img from "../../assets/images/social_background.jpg";
import Facebook from "../../assets/images/social/facebook.svg";
import Spotify from "../../assets/images/social/spotify.svg";
import Twitter from "../../assets/images/social/twitter.svg";
import Youtube from "../../assets/images/social/youtube.svg";

const Icons = styled.div`
  background-image: url(${Img});
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  height: 50vh;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Icon = styled.img`
  margin: 2rem;
  height: 5rem;
  width: 5rem;
`;

const Follow: React.FC = () => {
  return (
    <Icons>
      <Icon src={Youtube} alt="" />
      <Icon src={Facebook} alt="" />
      <Icon src={Spotify} alt="" />
      <Icon src={Twitter} alt="" />
    </Icons>
  );
};

export default Follow;
