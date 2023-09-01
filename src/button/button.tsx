import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styled from 'styled-components';
import { colors } from '../colors/colors';
import { typography } from '../typography/typography';
import { Separator } from '../separator/separator';
import { StyleButton } from './typography-button';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'cta';
  children: React.ReactNode;
  onClick?: () => void;
  icon?: IconDefinition;
  disabled?: boolean;
  compact?: boolean;
  expand?: boolean;
  style?: React.CSSProperties;
}

const Button = styled.button<ButtonProps>`
  font-family: ${typography.family.primary};
  font-size: ${typography.fontSize.large};
  font-weight: ${typography.fontWeight.semiBold};
  border-radius: ${typography.borderRadius.mediumRadius}
  width: ${({ expand }) => (expand ? '100%' : 'auto')};
  height: ${({ compact }) => (compact ? '32px' : '40px')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0;
  border-radius: 4px;
  border: none;
  padding-inline: 16px;

  background-color: ${({ variant, disabled }) =>
    variant === 'primary' || disabled ? colors.base.background : "";
    ?colors.brand.primary
    : variant === 'secondary'
    ? colors.brand.secondary
    : variant === 'cta'
    ? colors.brand.cta
    : 'transparent'};

color: ${
  ({ variant }) =>
    variant === 'primary'
      ? colors.base.white
      : variant === 'secondary' || variant === 'cta'
        ? colors.brand.primary
        : ''
};
`;
export const ButtonComponent = ({ variant, children, icon, onClick, compact, expand, disabled=false }: ButtonProps) => (
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
