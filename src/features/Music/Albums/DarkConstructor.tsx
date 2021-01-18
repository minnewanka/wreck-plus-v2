import React from "react";
import { Title, StyledContainer } from "./styledComponents";
import { Row } from "react-grid-system";
import Cover from "../../../assets/images/albums/cover/dark-constructor.jpg";
import Description from "./Description";
import Tracklist from "./Tracklist";
import Reception from "./Reception";

const DarkConstructor: React.FC = () => {
  const tracklist = [
    "Dark Construktor",
    "Leaders of Great Magnitude",
    "Arturia: Stellar Blacksmith (instrumental)",
    "Starcrossed Lovers",
    "Esoterhythm",
  ];
  return (
    <StyledContainer>
      <Row justify="center">
        <Title>Dark Constructor</Title>
      </Row>
      <Description cover={Cover}>
        <p>
          Dark Construktor is the second studio EP from Wreck Plus. The initial
          idea was to give an update on how our muiscal identity evolved almost
          three years after 2012’s Riding The Derelict. Of course one strong
          factor in this evolution was welcoming our new singer. We were
          motivated as well by the will to push further what we had already
          started, making it stronger and heavier. In this EP, we kept on
          sharing our music tastes, from vintage hard rock and heavy metal to
          today’s stoner scene, also throwing crazy ideas here and there.
        </p>
        <br />
        <p>
          It was recorded in our favourite rehearsal booth at Le Tremplin in
          Ivry sur Seine. Steam Morrisler’s Julien Creus did an amazing job at
          mixing the tracks giving it the massive sound we were looking for. Our
          friend Jo Riou created the awesome cover that reflects perfectly the
          concept of the EP. We also had the chance to fiddle with the
          synthetisers of Voiski for our instrumental interlude. We thank all of
          these people for their help. The EP was released on December 9, 2016
          in Digipack and on the interwebs.
        </p>
      </Description>
      <Tracklist data={tracklist} />
      <Reception>
        <p>
          “Tight and imaginative retro-fuzz from this gifted quartet that rocks
          hard and fast with relish and rigor” – Nuclear Dog’s Favourites of
          2016 on Heavy Planet
        </p>
        <br />
        <p>
          “Rocks hard in the vein of the 70s musical heroes who inspired it.
          Best enjoyed with the volume loud and a pair of large headphones.
          Favorite track: Leaders of Great Magnitude.” – Skyler Isaac on our
          Bandcamp page
        </p>
        <br />
        <p>
          “Superb 70’s vintage heavy metal that gets better with every listen.
          Great stuff! Can’t wait to hear more from these guys. Favorite track:
          Dark Construktor. ” – Keanan Grieser on our Bandcamp page
        </p>
        <br />
        <p>
          “L’autre morceau phare, c’est l’éponyme « Dark Construktor », dont les
          riffs initiaux nous remémorent les trois premiers albums de BLUE
          ÖYSTER CULT avant une rupture à la Sabbath millèsime 80’s, permettant
          à Yoann Avanthey de donner la mesure en voix de fausset. De bons
          riffs, une vraie mélodie, que demander de plus ?” – Long John Silver’s
          review on Forces Parallèles (french)
        </p>
      </Reception>
    </StyledContainer>
  );
};

export default DarkConstructor;
