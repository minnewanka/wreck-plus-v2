import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/images/Logo.png";

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
const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const Header: React.FC = () => {
  const history = useHistory();
  return (
    <Div onClick={() => history.push("/")}>
      <ImgContainer>
        <Img src={Logo} alt="" />
      </ImgContainer>
    </Div>
  );
};

export default Header;
