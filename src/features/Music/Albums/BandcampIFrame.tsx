import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 50%;
`;

const IFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const BandcampIFrame: React.FC<{ src: string }> = ({ src, children }) => {
  return (
    <Container>
      <IFrame seamless src={src}>
        {children}
      </IFrame>
    </Container>
  );
};

export default BandcampIFrame;
