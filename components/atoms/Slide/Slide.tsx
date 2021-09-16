import React, { ReactNode } from "react";
import styled from "styled-components";

export interface SlideWrapperProps {
  color?: string;
}

const SlideWrapper = styled.div<SlideWrapperProps>`
  height: 100vh;
  overflow: auto;
  background: ${(props) => (props.color ? props.color : "transparent")};
`;

const SlideContent = styled.div`
  min-height: 100%;
`;

export interface SlideProps extends SlideWrapperProps {
  children: ReactNode;
}

const Slide: React.FC<SlideProps> = (props: SlideProps) => {
  const { color, children } = props;

  return (
    <SlideWrapper color={color}>
      <SlideContent>{children}</SlideContent>
    </SlideWrapper>
  );
};

export default Slide;
