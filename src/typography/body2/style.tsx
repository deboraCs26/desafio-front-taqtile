import styled from 'styled-components';
import { colors } from '../../colors/colors';
import { typography } from '../typography';

type Colors = 'cta' | 'gray' | 'grayDark' | 'errorDark' | 'ctaDark';

export interface Body2Props {
  weight?: 'semiBold' | 'regular';
  color?: Colors;
  height?: 'large' | 'medium';
  size?: 'large' | 'small';
}

const color = {
  base: {
    ctaDark: colors.brand.ctaDark,
    cta: colors.brand.cta,
    gray: colors.base.gray,
    grayDark: colors.base.grayDark,
    errorDark: colors.state.statesError,
  },
};

export const StyledBody2 = styled.p<Body2Props>`
  font-family: ${typography.family.primary};
  font-size: ${(props: Body2Props) => (props.size === 'large' ? typography.fontSize.large : typography.fontSize.small)};
  font-weight: ${(props) =>
    props.weight === 'semiBold' ? typography.fontWeight.semiBold : typography.fontWeight.regular};
  line-height: ${(props) => (props.height === 'large' ? typography.lineHeight.large : typography.lineHeight.medium)};
  color: ${(props: Body2Props) => (props.color ? color.base[props.color] : '')};
  margin: 0;
`;
