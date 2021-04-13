import React from "react";
import styled from "styled-components";

import { NavButton, Layout } from "../components";

const MenuTop = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const MenuBottom = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const IndexPage: React.FC<{}> = () => (
  <Layout title="Menu View Example">
    <NavButton />
    <MenuTop>
      <div>Item1</div> <div>Item2</div> <div>Item3</div>
    </MenuTop>
    <MenuBottom>
      <div>Item1</div> <div>Item2</div>
    </MenuBottom>
  </Layout>
);

export default IndexPage;
