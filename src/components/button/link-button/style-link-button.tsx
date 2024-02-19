import React from 'react';
import { StyleLinkButton } from './link-button';
import { StyleButton, ButtonProps } from '../typography-button';

export interface LinkButtonProps extends ButtonProps {
  children: React.ReactNode;
  color: 'stateError' | 'baseGray' | 'ctaDark';
  expanded?: boolean;
}

export const LinkButtonComponent: React.FC<LinkButtonProps> = ({ children, color, expanded, semiBold, largeText }) => {
  return (
    <StyleLinkButton color={color} expanded={expanded}>
      <StyleButton semiBold={semiBold} largeText={largeText}>
        {children}
      </StyleButton>
    </StyleLinkButton>
  );
};
