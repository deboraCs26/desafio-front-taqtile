import React from 'react';
import { StyledHeading1 } from './style';

interface H1Props {
  children: React.ReactNode;
}

export const H1 = ({ children }: H1Props) => {
  return <StyledHeading1>{children}</StyledHeading1>;
};
