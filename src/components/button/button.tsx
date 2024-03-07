import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Separator } from '../separator/separator';
import { StyledButton } from './styled-button';

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
  semiBold?: boolean;
  largeText?: boolean;
}

export const Button = ({ variant, children, icon, onClick, compact, expand, disabled }: ButtonProps) => (
  <StyledButton onClick={onClick} variant={variant} compact={compact} expand={expand} disabled={disabled}>
    {!!icon && (
      <>
        <FontAwesomeIcon icon={icon} className="icon" />
        <Separator size="small" horizontal />
      </>
    )}
    {children}
  </StyledButton>
);
