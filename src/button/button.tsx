import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Separator } from '../separator/separator';
import { StyleButton } from './typography-button';

export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'cta';
  children: React.ReactNode;
  onClick?: () => void;
  icon?: IconDefinition;
  disabled?: boolean;
  compact?: boolean;
  expand?: boolean;
  style?: React.CSSProperties;
  text?: string;
}

export const Button = ({ variant, children, icon, onClick, compact, expand, disabled }: ButtonProps) => (
  <Button onClick={onClick} variant={variant} compact={compact} expand={expand} disabled={disabled}>
    {!!icon && (
      <>
        <FontAwesomeIcon icon={icon} className="icon" />
        <Separator size="small" horizontal />
      </>
    )}

    <StyleButton>{children}</StyleButton>
  </Button>
);
