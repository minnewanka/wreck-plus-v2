import React from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
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

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  width: 80%;
  visibility: hidden;
  opacity: 0;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.white};
  padding: 0.5rem;
`;

const Img = styled.img`
  width: 100%;
  transition: transform 0.5s ease;
  }
`;
const Div = styled.div<{ hasDetail: boolean }>`
  overflow: hidden;
  background-color: black;
  position: relative;
  ${(props) =>
    props.hasDetail &&
    css`
      :hover {
        cursor: pointer;
      }
      :hover ${Img} {
        transform: scale(1.1);
        opacity: 0.25;
      }
      :hover ${Text} {
        visibility: visible;
        opacity: 1;
        transition: visibility 0s linear 0s, opacity 1000ms;
      }
    `}
`;

const Music: React.FC = () => {
  const history = useHistory();
  const data = [
    {
      src: DarkConstructor,
      path: "/albums/dark-constructor",
      text: "Dark Construktor (2016)",
      hasDetail: true,
    },
    {
      src: StarCrossed,
      path: "/albums/starcrossed-lovers",
      text: "Starcrossed Lovers",
      hasDetail: true,
    },
    {
      src: OverWarLive,
      path: "/albums/dark-constructor",
      text: "Dark Construktor (2016)",
      hasDetail: false,
    },
    {
      src: OverWarLive2,
      path: "/albums/dark-constructor",
      text: "Dark Construktor (2016)",
      hasDetail: false,
    },
    {
      src: Riding,
      path: "/albums/riding",
      text: "Riding The Derelict",
      hasDetail: true,
    },
    {
      src: Spies,
      path: "/albums/spies",
      text: "SPIES, MOLES, AND SABOTAGE!",
      hasDetail: true,
    },
    {
      src: Roars,
      path: "/albums/dark-constructor",
      text: "Roars",
      hasDetail: false,
    },
  ];
  return (
    <Section id="music">
      <div className="wrapper">
        <h1 className="section-title">Music</h1>
        <Grid>
          {data.map((item) => (
            <Div
              hasDetail={item.hasDetail}
              onClick={() => history.push(item.path)}
            >
              <Img src={item.src} alt="" />
              <Text>{item.text}</Text>
            </Div>
          ))}
        </Grid>
      </div>
    </Section>
  );
};

export default Music;
