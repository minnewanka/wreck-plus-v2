import React from "react";
import styled from "styled-components";

interface CloseButtonProps {
  onClick: () => void;
}

const StyledButton = styled.button`
  width: auto;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
  position: fixed;
  top: 50px;
  right: 50px;
  &:after,
  &:before {
    content: "";
    width: 25px;
    height: 3px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 20px;
    position: absolute;
    top: 0;
    right: 0;
  }
  &:after {
    transform: rotate(45deg);
  }
  &:before {
    transform: rotate(-45deg);
  }
  span {
    display: none;
  }
`;

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      <span>close</span>
    </StyledButton>
  );
};
export default CloseButton;
