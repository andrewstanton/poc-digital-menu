import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface INavButtonProps {
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

  svg {
    width: 35%;
  }

  &:hover {
    transform: scale(1.1);
    background: #333;
  }
`;

export const NavLabel = styled.p`
  padding: 0;
  margin: 0;
  font-size: 80%;
  display: block;
  line-height: 80%;
`;

export const NavButton: React.FC<INavButtonProps> = ({ onClick }) => (
  <ButtonStyle onClick={onClick}>
    <div>
      <FontAwesomeIcon icon={faBars} />
      <NavLabel>Menu</NavLabel>
    </div>
  </ButtonStyle>
);
