import React from "react";
import styled from "styled-components";

export interface IItem {
  name: string;
  price: number;
}

export interface MenuOptionProps {
  name: string;
  img: string;
}

const Option = styled.div`
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const OptionImage = styled.div<{ img: string }>`
  background-size: cover;
  height: 250px;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 400px;
  background-image: ${({ img }) => `url("${img}")`};
  background-position: center center;
`;

const OptionName = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;

const MenuOption: React.FC<MenuOptionProps> = (props: MenuOptionProps) => {
  const { name, img } = props;

  return (
    <Option>
      <OptionImage img={img} />
      <OptionName>{name}</OptionName>
    </Option>
  );
};

export default MenuOption;
