import React from "react";
import { Title, StyledContainer, StyledRow } from "./styledComponents";
import { Row } from "react-grid-system";
import Description from "./Description";
import Tracklist from "./Tracklist";
import Reception from "./Reception";

const StarcrossedLovers: React.FC = () => {
  const tracklist = [
    "Starcrossed Lovers (Extended Version)",
    "Digital Aggression(Megaman X 8Bit Remix)",
    "Starcrossed Lovers (Famicom RPG 8Bit Remix)",
  ];
  return (
    <StyledContainer>
      <Row justify="center">
        <Title>Starcrossed Lovers</Title>
      </Row>
      <Description cover="/images/albums/cover/starcrossed.jpg">
        <p>
          The Starcrossed Lovers single is a preview of Dark Construktor. It
          features the title track with a different mix from the full EP with
          two bonus 8 bit remix.
        </p>
        <br />
        <p>
          The cover was made by good old H-P Matthieu, and is a Lovecraftian
          take on the Creation of Adam. The mixing was made by the amazing
          Julien Creus.
        </p>
        <br />
        <p>
          It was released on april 15, 2016 exclusively on the interwebs.
          Bandcamp – Spotify – Deezer – Itunes
        </p>
      </Description>
      <Tracklist data={tracklist} />
      <StyledRow>
        <iframe
          title="starcrossed"
          style={{ border: 0, width: "100%", height: "120px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=2579238566/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/"
          seamless
        >
          <a href="https://wreckplus.bandcamp.com/album/starcrossed-lovers-single">
            Starcrossed Lovers (Single) by Wreck Plus
          </a>
        </iframe>
      </StyledRow>
      <Reception>
        <p>
          “Le morceau s’étale sur plus de six minutes sans temps faible, la
          prestation vocale de Yoann Avanthey impressionne, la fin instrumentale
          est habilement ficelée, on sent qu’on s’est bien fait plaisir à
          torcher ça. Bref, que du bonheur !” (“The song stretches on more than
          six minutes without any low points, the vocal performance of Yoann
          Avanthey is impressive, the instrumental ending is well done, we can
          feel they had fun rocking this.”) – Long John Silver’s review on
          Forces Parallèles.
        </p>
      </Reception>
    </StyledContainer>
  );
};

export default StarcrossedLovers;
