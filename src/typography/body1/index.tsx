import React from 'react';
import { StyledBody1 } from './style';

interface Body1Props {
  children: React.ReactNode;
  weight?: 'bold' | 'regular';
  color?: 'gray' | 'XDark' | 'success';
}

export const Body1 = ({ children, weight, color }: Body1Props) => (
  <StyledBody1 weight={weight} color={color}>
    {children}
  </StyledBody1>
);
