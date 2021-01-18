import React from "react";
import styled from "styled-components";
import Facebook from "../../assets/images/social/facebook.png";
import Spotify from "../../assets/images/social/spotify.png";
import Twitter from "../../assets/images/social/twitter.png";
import Youtube from "../../assets/images/social/youtube.png";

const Div = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.black};
`;

const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: 0.8;
`;

const Icon = styled.img`
  height: 2rem;
  margin: 1rem;
  color: white;
  opacity: 0.8;
`;
const H1 = styled.h1`
  font-family: "Corben", regular;
  font-size: 1.2rem;
  opacity: 0.8;
`;

const Follow: React.FC = () => {
  return (
    <Div>
      <div>© 2021 Wreck Plus. All rights reserved.</div>
      <Icons>
        <Icon src={Youtube} alt="" />
        <Icon src={Facebook} alt="" />
        <Icon src={Spotify} alt="" />
        <Icon src={Twitter} alt="" />
      </Icons>
    </Div>
  );
};

export default Follow;
