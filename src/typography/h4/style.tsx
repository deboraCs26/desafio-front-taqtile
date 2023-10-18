import styled from 'styled-components';
import { colors } from '../../colors/colors';
import { typography } from '../typography';

interface H4Props {
  color?: 'gray' | 'grayXDark' | 'grayDark';
}

const color = {
  baseColor: {
    grayXDark: colors.base.grayXDark,
    gray: colors.base.gray,
    grayDark: colors.base.grayDark,
  },
};

export const Heading4 = styled.h4<H4Props>`
  font-family: ${typography.family.primary};
  font-size: ${typography.fontSize.large};
  font-weight: ${typography.fontWeight.semiBold};
  line-height: ${typography.lineHeight.xxLarge};
  color: ${(props: H4Props) => (props.color ? color.baseColor[props.color] : '')};

  margin: 0;
`;
