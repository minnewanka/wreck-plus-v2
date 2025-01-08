import React from "react";
import { Title, StyledContainer, StyledRow } from "./styledComponents";
import { Row } from "react-grid-system";
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
      <Description cover="/images/albums/cover/spies.jpg">
        <p>
          RECORDED UNDER EXTREME CONDITIONS, IN THE HEAT OF "LA CANTINE DE
          BELLEVILLE"...!
        </p>
      </Description>
      <Tracklist data={tracklist} />
      <StyledRow>
        <iframe
          title="bandcamp_spies"
          style={{ border: 0, width: "100%", height: "120px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=975007311/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/"
          seamless
        >
          <a href="https://wreckplus.bandcamp.com/album/spies-moles-and-sabotage-live">
            Spies, Moles And Sabotage! (Live) by Wreck Plus
          </a>
        </iframe>
      </StyledRow>
    </StyledContainer>
  );
};

export default Spies;
