import styled from 'styled-components';
import { colors } from '../../colors/colors';
import { typography } from '../typography';

const textColor = (color?: string) => {
  if (!color) {
    return '';
  }

  if (color === 'ctaDark') {
    return colors.brand.ctaDark;
  } else if (color === 'gray') {
    return colors.base.gray;
  } else if (color === 'grayDark') {
    return colors.base.grayDark;
  } else if (color === 'errorDark') {
    return colors.state.errorDark;
  } else {
    return '';
  }
};

export const StyledBody2 = styled.div<{
  size?: 'large' | 'small';
  weight?: 'semiBold' | 'regular';
  height?: 'large' | 'medium';
  color?: 'ctaDark' | 'gray' | 'grayDark' | 'errorDark';
}>`
  font-family: ${typography.family.primary};
  font-size: ${(props) => (props.size === 'large' ? typography.fontSize.large : typography.fontSize.small)};
  font-weight: ${(props) =>
    props.weight === 'semiBold' ? typography.fontWeight.semiBold : typography.fontWeight.regular};
  line-height: ${(props) => (props.height === 'large' ? typography.lineHeight.large : typography.lineHeight.medium)};
  color: ${({ color }) => textColor(color)};
  margin: 0;
`;
