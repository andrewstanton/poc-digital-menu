import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Layout } from "../components";

const Slide = styled.div`
  background: #eee;
  color: white;
  height: 100%;
  flex: 0 0 100%;
`;

const SlideBody = styled(motion.div)`
  background: red;
  min-height: 100%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;

interface ISlideContainerProps {
  position: number;
}

const SlideContainer = styled.div<ISlideContainerProps>`
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  transition: all ease 0.2s;
  transform: translateX(${(props) => `-${props.position}%`});
`;

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

interface ISlide {
  content: string;
}

const slides: ISlide[] = [
  {
    content: `Andrew`,
  },
  {
    content: `Hello`,
  },
];

const IndexPage: React.FC<{}> = () => {
  const [current, setCurrent] = useState(0);

  const nextPage = () => {
    const next = slides.length - 1 >= current ? 0 : current + 1;
    setCurrent(next);
  };

  const prevPage = () => {
    const prev = current - 1 <= 0 ? slides.length - 1 : current - 1;
    setCurrent(prev);
  };

  return (
    <Layout title="Menu View Example">
      <PageContainer>
        <SlideContainer position={current * 100}>
          {slides.map((slide, ix) => (
            <Slide key={ix}>
              <SlideBody
                drag="x"
                dragElastic={0.8}
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                onDrag={(_, info) => {
                  if (info.offset.x > 150) {
                    console.log("GO RIGHT");
                    // prevPage();
                  }
                  if (info.offset.x < -150) {
                    console.log("GO LEFT");
                    // nextPage();
                  }
                }}
              >
                {slide.content}
              </SlideBody>
            </Slide>
          ))}
        </SlideContainer>
      </PageContainer>
    </Layout>
  );
};

export default IndexPage;
