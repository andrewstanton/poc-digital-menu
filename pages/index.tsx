import React from "react";

import { Layout, SlideContainer } from "../components";

// @types
import { ISlide } from "../components/molecules/SlideContainer/SlideContainer";

const slides: ISlide[] = [
  {
    id: 1,
    content: <>Demo Content</>,
  },
  {
    id: 2,
    content: <>Slide 2</>,
  },
];

const IndexPage: React.FC<{}> = () => {
  return (
    <Layout title="Menu View Example">
      <SlideContainer slides={slides} />
    </Layout>
  );
};

export default IndexPage;
