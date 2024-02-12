import styled from 'styled-components';
import { typography } from '../typography/typography';

export interface ButtonProps {
  weight?: 'semiBold' | 'regular';
  size?: 'large' | 'small';
}

export const StyleButton = styled.p<ButtonProps>`
  font-family: ${typography.family.primary};
  font-size: ${(props) => (props.size === 'large' ? typography.fontSize.large : typography.fontSize.small)};
  font-weight: ${(props) =>
    props.weight === 'semiBold' ? typography.fontWeight.semiBold : typography.fontWeight.regular};
  font-height: ${typography.lineHeight.xxLarge};
  cursor: pointer;
`;
