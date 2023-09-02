import styled from 'styled-components';
import { colors } from '../../colors/colors';
import { typography } from '../typography';

export const StyledPrice = styled.p<{
  weight?: 'bold' | 'semiBold' | 'regular';
  size?: 'XLarge' | 'medium';
  color?: 'grayLight' | 'primary';
  height?: 'small' | 'XLarge';
}>`
  font-family: ${typography.family.primary};
  font-size: ${(props) => (props.size === 'XLarge' ? typography.fontSize.XLarge : typography.fontSize.medium)};
  font-weight: ${(props) =>
    props.weight === 'bold'
      ? typography.fontWeight.bold
      : props.weight === 'semiBold'
      ? typography.fontWeight.semiBold
      : typography.fontWeight.regular};
  line-height: ${(props) => (props.height === 'small' ? typography.lineHeight.small : typography.lineHeight.XLarge)};
  color: ${(props) =>
    props.color === 'grayLight' ? colors.base.grayLight : props.color === 'primary' ? colors.brand.primary : ''};
  margin: 0;
`;
