import React from 'react';
import { StyledLabel } from './style';

export interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  error?: boolean;
  color?: 'statesError' | 'grayDark';
}

export const Label = ({ children, htmlFor, error, color }: LabelProps) => {
  return (
    <StyledLabel error={error} color={color} htmlFor={htmlFor}>
      {children}
    </StyledLabel>
  );
};
