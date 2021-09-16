import React, { ReactNode } from "react";
import SwipeableViews from "react-swipeable-views";

import { Slide } from "../../atoms";

export interface ISlide {
  id: string | number;
  backgroundColor?: string;
  content: ReactNode;
}

export interface SlideContainerProps {
  slides: ISlide[];
  resistance?: boolean;
  enableMouseEvents?: boolean;
}

const SlideContainer: React.FC<SlideContainerProps> = (
  props: SlideContainerProps
) => {
  const { slides, enableMouseEvents, resistance } = props;

  return (
    <SwipeableViews
      enableMouseEvents={enableMouseEvents}
      resistance={resistance}
    >
      {slides.map((slide) => (
        <Slide color={slide.backgroundColor} key={slide.id}>
          {slide.content}
        </Slide>
      ))}
    </SwipeableViews>
  );
};

SlideContainer.defaultProps = {
  enableMouseEvents: true,
  resistance: true,
};

export default SlideContainer;
