import React from "react";
import styled from "styled-components";

export interface IItem {
  name: string;
  price: number;
}

interface IMenuOptionProps {
  item: IItem;
}

const Option = styled.div``;

export const MenuOption: React.FC<IMenuOptionProps> = ({ item }) => (
  <Option>
    <h3>{item.name}</h3>
  </Option>
);
