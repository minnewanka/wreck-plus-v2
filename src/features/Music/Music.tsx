import React from "react";
import Image from "next/image";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";

const Section = styled.section`
  text-align: center;
  background-color: #191a1e;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 2fr));
  grid-gap: 20px;
  align-items: stretch;
  @media (max-width: ${(props) => props.theme.device.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
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
      src: "/images/albums/cover/roars.jpg",
      path: "/albums/roars",
      text: "Roars in the Dead of Night",
      hasDetail: true,
    },
    {
      src: "/images/albums/cover/dark-constructor.jpg",
      path: "/albums/dark-constructor",
      text: "Dark Construktor (2016)",
      hasDetail: true,
    },
    {
      src: "/images/albums/cover/starcrossed.jpg",
      path: "/albums/starcrossed-lovers",
      text: "Starcrossed Lovers",
      hasDetail: true,
    },
    {
      src: "/images/albums/cover/spies.jpg",
      path: "/albums/spies",
      text: "SPIES, MOLES, AND SABOTAGE!",
      hasDetail: true,
    },
    {
      src: "/images/albums/cover/riding.jpg",
      path: "/albums/riding",
      text: "Riding The Derelict",
      hasDetail: true,
    },
  ];
  return (
    <Section id="music">
      <div className="wrapper">
        <h1 className="section-title">Music</h1>
        <Grid>
          {data.map((item, index) => (
            <Div
              key={`album_${index}`}
              hasDetail={item.hasDetail}
              onClick={() => history.push(item.path)}
            >
              <Image src={item.src} alt="" fill />
              <Text>{item.text}</Text>
            </Div>
          ))}
        </Grid>
      </div>
    </Section>
  );
};

export default Music;
