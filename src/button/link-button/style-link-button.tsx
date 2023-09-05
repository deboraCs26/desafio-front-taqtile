import React from 'react';
import { StyleLinkButton } from './link-button';
import { StyleButton } from '../typography-button';

export interface LinkButtonProps {
  to: string;
  children: React.ReactNode;
  color: 'stateError' | 'ctaDark';
  expanded?: boolean;
}

export const LinkButtonComponent: React.FC<LinkButtonProps> = ({ to, children, color }) => {
  return (
    <StyleLinkButton to={to} color={color}>
      <StyleButton>{children}</StyleButton>
    </StyleLinkButton>
  );
};
