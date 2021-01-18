import React from "react";
import styled from "styled-components";
import { StyledRow, SubTitle } from "./styledComponents";

const List = styled.ol`
  margin: 1rem 2rem;
`;

const Tracklist: React.FC<{ data: String[] }> = ({ data }) => {
  return (
    <StyledRow>
      <div>
        <SubTitle>Tracklist</SubTitle>
        <List>
          {data.map((item) => (
            <li>{item}</li>
          ))}
        </List>
      </div>
    </StyledRow>
  );
};

export default Tracklist;
