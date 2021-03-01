import React, { useState, useEffect } from "react";
import Scrollspy from "react-scrollspy";
import { MENU } from "../../utils/constants";
import styled, { css } from "styled-components";

const Anchor = styled.a`
  &:link {
    text-decoration: inherit;
    color: inherit;
    cursor: pointer;
  }
  &:visited {
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
  }
`;
const Items = styled.div<{ isOpen: boolean }>`
  @media (max-width: ${(props) => props.theme.device.md}) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
  }
`;

const UL = styled(Scrollspy)`
  @media (max-width: ${(props) => props.theme.device.md}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;
const Container = styled.div`
  z-index: 2000;
  display: flex;
  background-color: ${(props) => props.theme.colors.black};
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-family: "Corben", regular;
  font-size: 1.2rem;
  letter-spacing: 2px;
  @media (max-width: ${(props) => props.theme.device.md}) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
  }

  &.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    transition: height 250ms ease-in-out, top 250ms ease-in-out;
    z-index: 2000;
  }

  .is-current {
    color: ${(props) => props.theme.colors.white};
  }
`;

const Item = styled.span`
  display: inline-block;
  margin: 1rem 1rem;
`;

const MenuBtn = styled.div`
  width: 40px;
  height: 40px;
  position: fixed;
  right: 20px;
  top: 30px;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) => props.theme.colors.black};
  @media (max-width: ${(props) => props.theme.device.md}) {
    display: flex;
  }
`;

const Burger = styled.div<{ isOpen: boolean }>`
  width: 25px;
  height: 3px;
  background: #fff;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
    display: block;
  }
  ${(props) =>
    props.isOpen &&
    css`
      background: transparent;
    `}
  :before,
  :after {
    content: "";
    position: absolute;
    width: 25px;
    height: 3px;
    background: #fff;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
  }
  :before {
    transform: translateY(-10px);
    ${(props) =>
      props.isOpen &&
      css`
        transform: rotate(45deg);
      `}
  }
  :after {
    transform: translateY(10px);
    ${(props) =>
      props.isOpen &&
      css`
        transform: rotate(-45deg);
      `}
  }
`;

const Menu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    window.onscroll = function sticky() {
      const menu = document.getElementById("menu")!;
      if (window.pageYOffset > 300) {
        menu.classList.add("sticky");
      } else {
        menu.classList.remove("sticky");
      }
    };
  });

  return (
    <Container id="menu">
      <Items isOpen={menuOpen}>
        <UL items={MENU} currentClassName="is-current">
          {MENU.map((item) => (
            <Item key={`menu_${item}`}>
              <Anchor
                href={item === "home" ? "/#" : `/#${item}`}
                onClick={() => {
                  setMenuOpen(false);
                  menuOpen && document.body.classList.toggle("lock-scroll");
                }}
              >
                {item}
              </Anchor>
            </Item>
          ))}
        </UL>
      </Items>
      <MenuBtn
        onClick={() => {
          setMenuOpen(!menuOpen);
          document.body.classList.toggle("lock-scroll");
        }}
      >
        <Burger isOpen={menuOpen} />
      </MenuBtn>
    </Container>
  );
};

export default Menu;
