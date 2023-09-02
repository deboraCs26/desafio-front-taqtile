import React from 'react';
import { StyledHeading2 } from './style';

interface H2Props {
  children: React.ReactNode;
}

export const H2 = ({ children }: H2Props) => {
  return <StyledHeading2>{children}</StyledHeading2>;
};
