import styled from 'styled-components';
import Carousel, { CarouselProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { colors } from '../colors/colors';

interface CustomCarouselProps extends CarouselProps {
  active?: boolean;
}

export const StyledCardContainer = styled.div`
  display: flex;
`;

export const CarouselWrapper = styled.div`
  padding: 18px;
`;

export const StyleCarousel = styled(Carousel)<CustomCarouselProps>`
  .react-multi-carousel-dot-list {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .react-multi-carousel-item {
    width: auto !important;
  }

  @media (max-width: 480px) {
    .react-multi-carousel-item {
      width: 100% !important;
      margin: 0 32px;
    }
  }
`;

export const CustomDot = styled.div<{ isSelected?: boolean }>`
  width: 0.6em;
  height: 0.6em;
  background-color: ${({ isSelected }) => (isSelected ? colors.brand.cta : colors.brand.ctaLight)};
  border-radius: 50%;
  margin: 0 0.5em;
  cursor: pointer;

  &:hover {
    background-color: ${colors.brand.cta};
  }

  &.selected {
    background-color: ${colors.base.background};
  }
`;
