import React from "react";
import styled from "styled-components";
import Logo from "../../assets/images/Logo.png";

const Div = styled.div`
  display: flex;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.black};
  justify-content: center;
`;
const Header: React.FC = () => {
  return (
    <Div>
      <img src={Logo} alt="" />
    </Div>
  );
};

export default Header;
