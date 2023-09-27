import React from 'react';
import { StyledLabel } from './style';

export interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  error?: boolean;
}

export const Label = ({ children, htmlFor, error }: LabelProps) => {
  return (
    <StyledLabel error={error}>
      <label htmlFor={htmlFor}>{children}</label>
    </StyledLabel>
  );
};
