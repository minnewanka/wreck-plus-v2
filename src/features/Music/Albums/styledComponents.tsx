import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";

export const Title = styled.h1`
  font-family: "Corben", regular;
  font-size: 3rem;
  text-align: center;
  word-spacing: 0.5rem;
`;
export const SubTitle = styled.h2`
  margin: 1rem 0;
`;
export const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
`;

export const Text = styled(Col)`
  padding: 1rem;
`;

export const Cite = styled.p`
  font-style: italic;
  font-size: 0.9rem;
`;

export const StyledContainer = styled(Container)`
  background-color: #191a1e;
`;

export const StyledRow = styled(Row)`
  padding: 1rem 5rem;
  @media (max-width: ${(props) => props.theme.device.md}) {
    padding: 0.5rem;
  }
`;
