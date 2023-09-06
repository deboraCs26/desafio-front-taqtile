import React from 'react';
import { StyleLinkButton } from './link-button';
import { StyleButton } from '../typography-button';

export interface LinkButtonProps {
  children: React.ReactNode;
  color: 'stateError' | 'ctaDark';
  expanded?: boolean;
  to: string;
}

export const LinkButtonComponent: React.FC<LinkButtonProps> = ({ to, children, color, expanded }) => {
  return (
    <StyleLinkButton to={to} color={color} expanded={expanded}>
      <StyleButton>{children}</StyleButton>
    </StyleLinkButton>
  );
};
