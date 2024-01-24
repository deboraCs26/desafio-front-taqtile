import React, { useState, useEffect } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { StyleCarousel } from './style';
import { CustomDot } from './style';
import { StyledCardContainer } from './style';

export interface CarouselProps {
  children: React.ReactNode[];
}

export const CarouselComponentization = ({ children }: CarouselProps) => {
  const [renderCarousel, setRenderCarousel] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setRenderCarousel(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  return (
    <div>
      {renderCarousel ? (
        <StyleCarousel
          responsive={responsive}
          customTransition="transform 500ms ease-in-out"
          additionalTransfrom={0}
          className="carousel-without-arrows"
          itemClass="react-multi-carousel-item"
          showDots={true}
          arrows={false}
          customDot={<CustomDot />}
        >
          {children}
        </StyleCarousel>
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
