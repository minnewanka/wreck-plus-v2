import React from "react";
import { Title, StyledContainer } from "./styledComponents";
import { Row } from "react-grid-system";
import Cover from "../../../assets/images/albums/cover/spies.jpg";
import Description from "./Description";
import Tracklist from "./Tracklist";

const Spies: React.FC = () => {
  const tracklist = [
    "Starcrossed Lovers (Extended Version)",
    "Digital Aggression(Megaman X 8Bit Remix)",
    "Starcrossed Lovers (Famicom RPG 8Bit Remix)",
  ];
  return (
    <StyledContainer>
      <Row justify="center">
        <Title>SPIES, MOLES, AND SABOTAGE!</Title>
      </Row>
      <Description cover={Cover}>
        <p>
          EP live enregistré dans des conditions extrêmes en Avril 2013, à La
          Cantine de Belleville (Paris).
        </p>
        <br />
        <p>
          Sortie : Novembre 2013.
          <br /> En écoute et téléchargement libres sur Bandcamp et également
          téléchargeable sur notre site avec une reprise en bonus!
        </p>
        <br />
        <p>
          Mixage : Leirbag Javan.
          <br />
          Pochette : Gabriel Redon & Leirbag Javan.
        </p>
        <p>
          Philippe Gauchot : chant
          <br />
          Leirbag Javan : guitare, choeurs
          <br />
          Gabriel Redon : basse
          <br />
          Axel Thomas : batterie, choeurs
          <br />
        </p>
      </Description>
      <Tracklist data={tracklist} />
    </StyledContainer>
  );
};

export default Spies;
