import React from "react";
import Image from "next/image";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.black};
  justify-content: center;
  cursor: pointer;
`;
const ImgContainer = styled.div`
  pointer: cursor;
  @media (max-width: ${(props) => props.theme.device.md}) {
    width: 50%;
  }
`;

const Header: React.FC = () => {
  const history = useHistory();
  return (
    <Div onClick={() => history.push("/")}>
      <ImgContainer>
        <Image src="images/Logo.png" alt="" fill />
      </ImgContainer>
    </Div>
  );
};

export default Header;
