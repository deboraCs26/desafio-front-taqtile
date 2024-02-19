import styled from 'styled-components';
import { typography } from '../typography/typography';

export interface ButtonProps {
  semiBold?: boolean;
  largeText?: boolean;
}

export const StyleButton = styled.p<ButtonProps>`
  font-family: ${typography.family.primary};
  font-size: ${(props) => (props.largeText ? typography.fontSize.large : typography.fontSize.small)};
  font-weight: ${(props) => (props.semiBold ? typography.fontWeight.semiBold : typography.fontWeight.regular)};
  font-height: ${typography.lineHeight.xxLarge};
  margin: 0;
  cursor: pointer;
`;
