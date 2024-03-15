import React, { useEffect, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import { useIsMobile } from '../../resize-page/mobile-use-case';
import 'react-multi-carousel/lib/styles.css';
import { StyleCarousel, CustomDot, StyledCardContainer, CarouselWrapper } from './style';

export interface CarouselProps {
  children: React.ReactNode[];
}

interface CarouselRef {
  goToSlide: (index: number) => void;
}

export const CarouselComponentization = ({ children }: CarouselProps) => {
  const isMobile = useIsMobile();

  const carouselRef = useRef<CarouselRef | null>(null);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.goToSlide(0);
    }
  }, []);

  return (
    <div>
      {isMobile ? (
        <CarouselWrapper>
          <StyleCarousel
            responsive={responsive}
            customTransition="transform 500ms ease-in-out"
            additionalTransfrom={0}
            className="carousel-without-arrows"
            itemClass="custom-carousel-item"
            showDots={true}
            arrows={false}
            customDot={<CustomDot />}
            infinite={true}
            ref={carouselRef as React.Ref<Carousel>}
          >
            {children}
          </StyleCarousel>
        </CarouselWrapper>
      ) : (
        <StyledCardContainer>
          {children.map((child, index) => (
            <div key={index}>{child}</div>
          ))}
        </StyledCardContainer>
      )}
    </div>
  );
};
