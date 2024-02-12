import React from 'react';
import { StyleLinkButton } from './link-button';
import { ButtonProps, StyleButton } from '../typography-button';

export interface LinkButtonProps extends ButtonProps {
  children: React.ReactNode;
  color: 'stateError' | 'baseGray' | 'ctaDark';
  expanded?: boolean;
}

export const LinkButtonComponent: React.FC<LinkButtonProps> = ({ children, color, expanded, size, weight }) => {
  return (
    <StyleLinkButton color={color} expanded={expanded}>
      <StyleButton size={size} weight={weight}>
        {children}
      </StyleButton>
    </StyleLinkButton>
  );
};
