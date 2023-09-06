import styled from 'styled-components';
import { colors } from '../../colors/colors';
import { typography } from '../typography';
import { Body2Props } from '.';

type Colors = 'cta' | 'gray' | 'grayDark' | 'errorDark';

const color = {
  base: {
    cta: colors.brand.ctaDark,
    gray: colors.base.gray,
    grayDark: colors.base.grayDark,
    errorDark: colors.state.statesError,
  },
};

export const StyledBody2 = styled.p<Body2Props>`
  font-family: ${typography.family.primary};
  font-size: ${(props) => (props.size === 'large' ? typography.fontSize.large : typography.fontSize.small)};
  font-weight: ${(props) =>
    props.weight === 'semiBold' ? typography.fontWeight.semiBold : typography.fontWeight.regular};
  line-height: ${(props) => (props.height === 'large' ? typography.lineHeight.large : typography.lineHeight.medium)};
  color: ${(props) => (props.color ? color.base[props.color as Colors] : '')};
  margin: 0;
`;
