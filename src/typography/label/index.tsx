import React from 'react';
import { StyledLabel } from './style';

interface LabelProps {
  children: React.ReactNode;
  htmlFor: string;
}

export const Label = ({ children, htmlFor }: LabelProps) => {
  return (
    <StyledLabel>
      <label htmlFor={htmlFor}>{children}</label>
    </StyledLabel>
  );
};
