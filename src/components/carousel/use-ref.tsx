import React from 'react';
import Carousel, { CarouselProps } from 'react-multi-carousel';

interface StyleCarouselProps extends Omit<CarouselProps, 'customDot'> {
  customTransition: string;
  additionalTransfrom: number;
  className: string;
  itemClass: string;
  showDots: boolean;
  arrows: boolean;
  customDot: React.ReactElement | null;
  infinite: boolean;
}

export const StyleCarousel = React.forwardRef<Carousel, StyleCarouselProps>((props, ref) => {
  return (
    <Carousel {...props} ref={ref}>
      {props.children}
    </Carousel>
  );
});
