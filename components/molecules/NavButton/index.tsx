import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface INavButtonProps {}

const ButtonStyle = styled.button`
  height: 100px;
  width: 100px;
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
    height: 38px;
  }

  &:hover {
    transform: scale(1.1);
    background: #333;
  }
`;

export const NavLabel = styled.p`
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
  display: block;
  line-height: 80%;
`;

export const NavButton: React.FC<INavButtonProps> = () => (
  <ButtonStyle>
    <div>
      <FontAwesomeIcon icon={faBars} />
      <NavLabel>Menu</NavLabel>
    </div>
  </ButtonStyle>
);
