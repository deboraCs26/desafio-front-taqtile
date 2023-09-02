import React from 'react';
import { StyledHeading3 } from './style';

interface H3Props {
  children: React.ReactNode;
}

export const H3 = ({ children }: H3Props) => {
  return <StyledHeading3>{children}</StyledHeading3>;
};
