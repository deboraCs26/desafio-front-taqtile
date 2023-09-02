import React from 'react';
import { StyledHeading4 } from './style';

interface H4Props {
  children: React.ReactNode;
  color?: 'gray' | 'grayXDark' | 'grayDark';
}

export const H4 = ({ children, color }: H4Props) => {
  return <StyledHeading4 color={color}>{children}</StyledHeading4>;
};
