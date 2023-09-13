import React from 'react';
import { StyledBody2 } from './style';

type Colors = 'cta' | 'gray' | 'grayDark' | 'errorDark' | 'ctaDark';

export interface Body2Props {
  children: React.ReactNode;
  weight?: 'semiBold' | 'regular';
  color?: Colors;
  height?: 'large' | 'medium';
  size?: 'large' | 'small';
}

export const Body2 = ({ children, weight, color, height, size }: Body2Props) => (
  <StyledBody2 weight={weight} color={color} height={height} size={size}>
    {children}
  </StyledBody2>
);
