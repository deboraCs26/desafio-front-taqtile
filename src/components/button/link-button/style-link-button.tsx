import React from 'react';
import { StyleLinkButton } from './link-button';
import { StyleButton } from '../typography-button';

export interface LinkButtonProps {
  children: React.ReactNode;
  color: 'stateError' | 'baseGray' | 'ctaDark';
  expanded?: boolean;
}

export const LinkButtonComponent: React.FC<LinkButtonProps> = ({ children, color, expanded }) => {
  return (
    <StyleLinkButton color={color} expanded={expanded}>
      <StyleButton>{children}</StyleButton>
    </StyleLinkButton>
  );
};
