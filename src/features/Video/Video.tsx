import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Div = styled.div`
  margin: auto;
  padding: 2rem 0;
  width: 75%;
`;
const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

const Video: React.FC = () => {
  return (
    <Div>
      <PlayerWrapper>
        <StyledReactPlayer
          url="https://youtu.be/yJXCO7bVUww"
          width="100%"
          height="100%"
        />
      </PlayerWrapper>
    </Div>
  );
};

export default Video;
