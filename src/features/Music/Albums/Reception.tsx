import React from "react";
import styled from "styled-components";
import { StyledRow, SubTitle } from "./styledComponents";

export const Quotes = styled.div`
  padding: 1rem;
  border-left: 1px solid ${(props) => props.theme.colors.grey};
  p {
    font-style: italic;
    font-size: 0.9rem;
  }
`;

const Reception: React.FC = ({ children }) => {
  return (
    <StyledRow>
      <div>
        <SubTitle>Reception</SubTitle>
        <Quotes>{children}</Quotes>
      </div>
    </StyledRow>
  );
};
export default Reception;
