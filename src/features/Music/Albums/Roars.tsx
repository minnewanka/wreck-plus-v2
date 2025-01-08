import React from "react";
import { Title, StyledContainer, StyledRow } from "./styledComponents";
import { Row } from "react-grid-system";
import Description from "./Description";
import Tracklist from "./Tracklist";
import Reception from "./Reception";

const Roars: React.FC = () => {
  const tracklist = [
    "Roars in the Dead of Night",
    "Smashed Our Way Through History",
  ];
  return (
    <StyledContainer>
      <Row justify="center">
        <Title>ROARS IN THE DEAD OF NIGHT</Title>
      </Row>
      <Description cover="/images/albums/cover/roars.jpg">
        <p>
          A stray cat wandering in the dead of the night. Instincts that were
          once deeply buried are coming back. Flirting with danger. Feeling
          free... This isn't exactly your regular wildlife documentary. It’s
          Heavy Metal.
        </p>
        <br />
        <p>
          Wreck Plus is back for some high speed, heavy and greasy rocking on
          this maxi single. This is an annunciation a full opus predicted for
          the future.
        </p>
      </Description>
      <Tracklist data={tracklist} />
      <StyledRow>
        <iframe
          title="roars"
          style={{ border: 0, width: "100%", height: "120px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=796450442/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/"
          seamless
        >
          <a href="https://wreckplus.bandcamp.com/album/roars-in-the-dead-of-night-maxi-single">
            Roars in the Dead of Night (Maxi Single) by Wreck Plus
          </a>
        </iframe>
      </StyledRow>
      <Reception>
        <p>
          "These two songs continue Wreck Plus's tradition of evoking the best
          stuff about traditional heavy metal from the mid-70s and are pure fun
          to listen to.""
        </p>
      </Reception>
    </StyledContainer>
  );
};

export default Roars;
