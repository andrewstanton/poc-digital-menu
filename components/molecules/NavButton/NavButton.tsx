import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface NavButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const ButtonStyle = styled.button`
  height: 90px;
  width: 90px;
  background: #666;
  color: #fff;
  padding: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  border-radius: 100%;
  text-align: center;
  transition: ease 0.4s all;
  cursor: pointer;
  border: 0;

  &:hover {
    transform: scale(1.1);
    background: #333;
  }
`;

export const NavLabel = styled.p`
  padding: 0;
  margin: 0;
  font-size: 12px;
  display: block;
  line-height: 80%;
  margin-top: 5px;
`;

const NavIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
`;

const NavButton: React.FC<NavButtonProps> = ({ onClick }) => (
  <ButtonStyle onClick={onClick}>
    <div>
      <NavIcon icon={faBars} />
      <NavLabel>Menu</NavLabel>
    </div>
  </ButtonStyle>
);

export default NavButton;
