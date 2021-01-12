import React from "react";
import styled from "styled-components";

const Section = styled.section`
  text-align: center;
  background-color: #191a1e;
  height: 100vh;
`;

const Band: React.FC = () => {
  return (
    <Section id="band-section">
      <h1 className="section-title">THE BAND</h1>
      <div className="wrapper">
        <p>
          1974, in the very depth of europe, four individuals discovered the
          roar that produced a succession of transistors and tubes once
          connected to a magical instrument‚Ä¶ it was loud, sensual and chaotic.
          In excess for sure. They disappeared in the most bizarre circumstances
          and nobody every heard of them since then. In 2009, a group of the
          same number of individuals claims it escaped from a dark and secret
          cryonics project. Awakened in ivry sur seine, france, they intend to
          continue the story where it was stopped. This declaration, if not a
          vengeance, wreck plus delivers it in an old school heavy metal
          fashion, through innovative songs where the riff is king. Every song
          has an identify of its own and a memorable atmosphere. All together
          this forms a tribute to black sabbath, judas priest, kiss, zz top and
          blue o√øster cult‚Ä¶
        </p>
      </div>
    </Section>
  );
};

export default Band;
