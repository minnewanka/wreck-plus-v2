import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo-1.jpg";

const Section = styled.section`
  text-align: center;
  background-color: #191a1e;
  height: 100vh;
`;

const Div = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 700px;
  padding-right: 10px;
  padding-left: 10px;
`;

const Img = styled.img`
  margin: 1rem;
`;

const Band: React.FC = () => {
  return (
    <Section id="band">
      <h1 className="section-title">THE BAND</h1>
      <Div>
        <p>
          <b>1974</b>, IN THE VERY DEPTH OF EUROPE, FOUR INDIVIDUALS DISCOVERED
          THE <b>ROAR</b> THAT PRODUCED A SUCCESSION OF TRANSISTORS AND TUBES
          ONCE CONNECTED TO A MAGICAL INSTRUMENT… IT WAS <b>LOUD</b>, SENSUAL
          AND CHAOTIC. IN <b>EXCESS</b> FOR SURE. THEY DISAPPEARED IN THE MOST{" "}
          <b>BIZARRE</b> CIRCUMSTANCES AND NOBODY EVERY HEARD OF THEM SINCE
          THEN.
          <br />
          <br />
        </p>
        <p>
          IN 2009, A GROUP OF THE SAME NUMBER OF INDIVIDUALS CLAIMS IT ESCAPED
          FROM A <b>DARK</b> AND SECRET CRYONICS PROJECT. AWAKENED IN IVRY SUR
          SEINE, FRANCE, THEY INTEND TO CONTINUE THE STORY WHERE IT WAS STOPPED.
          <br />
          <br />
        </p>
        <p>
          THIS DECLARATION, IF NOT A <b>VENGEANCE</b>, WRECK PLUS DELIVERS IT IN
          AN OLD SCHOOL <b>HEAVY</b> METAL FASHION, THROUGH INNOVATIVE SONGS
          WHERE THE RIFF IS <b>KING</b>. EVERY SONG HAS AN IDENTIFY OF ITS OWN
          AND A MEMORABLE ATMOSPHERE. ALL TOGETHER THIS FORMS A TRIBUTE TO BLACK
          SABBATH, JUDAS PRIEST, KISS, ZZ TOP AND BLUE OŸSTER CULT…
          <br />
          <br />
        </p>
        <Img src={logo} alt="" />
      </Div>
    </Section>
  );
};

export default Band;
