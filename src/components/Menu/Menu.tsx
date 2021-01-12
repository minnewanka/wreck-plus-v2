import React, { useEffect } from "react";
import { MENU } from "../../utils/constants";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.black};
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 2px;
  height: 3rem;

  &.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    transition: height 250ms ease-in-out, top 250ms ease-in-out;
    z-index: 1;
  }
`;

const Item = styled.span`
  display: inline-block;
  margin: 1rem 1rem;
`;

const Menu: React.FC = () => {
  useEffect(() => {
    window.onscroll = function sticky() {
      var menu = document.getElementById("menu")!;
      if (window.pageYOffset > 300) {
        menu.classList.add("sticky");
      } else {
        menu.classList.remove("sticky");
      }
    };
  });

  return (
    <Div id="menu">
      {MENU.map((item) => (
        <Item>{item}</Item>
      ))}
    </Div>
  );
};

export default Menu;
