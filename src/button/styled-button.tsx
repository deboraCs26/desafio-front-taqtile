import styled from 'styled-components';
import { colors } from '../colors/colors';
import { typography } from '../typography/typography';
import { ButtonProps } from './button';

const buttonStyle = {
  disabled: {
    background: colors.base.background,
    color: colors.base.grayXDark,
  },

  primary: {
    background: colors.brand.primary,
    color: colors.base.white,
  },

  secondary: {
    background: colors.brand.secondary,
    color: colors.brand.primary,
  },

  cta: {
    background: colors.brand.cta,
    color: colors.brand.primary,
  },
};

export const StyledButton = styled.button<ButtonProps>`
  font-family: ${typography.family.primary};
  font-size: ${typography.fontSize.large};
  font-weight: ${typography.fontWeight.semiBold};
  border-radius: ${typography.borderRadius.mediumRadius};
  width: ${({ expand }) => (expand ? '100%' : 'auto')};
  height: ${({ compact }) => (compact ? '32px' : '40px')};
  background-color: ${(props) => buttonStyle[props.variant]?.background || ''};
  color: ${(props) => buttonStyle[props.variant]?.color || ''};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border-radius: 4px;
  border: none;
  padding-inline: 16px;
  cursor: pointer;
`;
