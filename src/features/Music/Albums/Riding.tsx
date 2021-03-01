import React from "react";
import { Title, StyledContainer, StyledRow } from "./styledComponents";
import { Row } from "react-grid-system";
import Cover from "../../../assets/images/albums/cover/riding.jpg";
import Description from "./Description";
import Tracklist from "./Tracklist";

const Riding: React.FC = () => {
  const tracklist = [
    "Digital Aggression",
    "Flying Dutchman",
    "The Wreck",
    "Priestess Of The Oddity",
  ];
  return (
    <StyledContainer>
      <Row justify="center">
        <Title>RIDING THE DERELICT</Title>
      </Row>
      <Description cover={Cover}>
        <p>This is the first studio EP of Wreck Plus.</p>
        <br />
        <p>
          MP3 / FLAC on Bandcamp.
          <br />
          Limited edition Digipack still available Bandcamp and Ozium Records!
        </p>
        <br />
        <p>
          Engineered by Lino Cardoso (from Echo Doppler) in September 2012 at le
          Tremplin, Ivry-sur-Seine.
          <br />
          Mixed by Lino Cardoso & Wreck Plus in November 2012.
          <br />
          Produced by Lierbag Javan.
          <br />
          Booklet illustrations : Gabriel Redon.
          <br />
          Cover : Gabriel Redon & Philippe Gauchot
        </p>
        <p>Release date : december 2012 (MP3), october 2013 (CD)</p>
        <p>
          Philippe Gauchot : vocals
          <br />
          Leirbag Javan : guitars
          <br />
          Gabriel Redon : bass & backing vocals
          <br />
          Axel Thomas : drums & backing vocals
        </p>
      </Description>
      <Tracklist data={tracklist} />

      <StyledRow>
        <iframe
          title="riding-the-dereclict"
          style={{ border: 0, width: "100%", height: "120px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=1441791368/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/"
          seamless
        >
          <a href="https://wreckplus.bandcamp.com/album/riding-the-derelict-ep">
            Riding The Derelict (EP) by Wreck Plus
          </a>
        </iframe>
      </StyledRow>
    </StyledContainer>
  );
};

export default Riding;
