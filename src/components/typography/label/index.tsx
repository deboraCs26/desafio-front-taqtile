import React from 'react';
import { StyledLabel } from './style';

export interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  error?: boolean;
  color?: 'statesError' | 'grayDark';
  semiBold?: boolean;
  largeText?: boolean;
}

export const Label = ({ children, htmlFor, error, color, semiBold, largeText }: LabelProps) => {
  return (
    <StyledLabel error={error} color={color} htmlFor={htmlFor} semiBold={semiBold} largeText={largeText}>
      {children}
    </StyledLabel>
  );
};
