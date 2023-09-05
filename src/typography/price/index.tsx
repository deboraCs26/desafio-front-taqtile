import React from 'react';
import { StyledPrice } from './style';

export interface PriceProps {
  children: React.ReactNode;
  weight?: 'bold' | 'semiBold' | 'regular';
  size?: 'XLarge' | 'medium';
  color?: 'grayLight' | 'primary';
  height?: 'small' | 'XLarge';
}

export const Price = ({ children, weight, size, color, height }: PriceProps) => {
  return (
    <StyledPrice weight={weight} size={size} color={color} height={height}>
      {children}
    </StyledPrice>
  );
};
