import styled from 'styled-components';
import { colors } from '../../colors/colors';
import { typography } from '../typography';

interface Body1Props {
  weight?: 'bold' | 'regular';
  color?: 'gray' | 'XDark' | 'success';
}

export const Body1 = styled.p<Body1Props>`
  font-family: ${typography.family.primary};
  font-size: ${typography.fontSize.large};
  font-weight: ${(props) => (props.weight === 'bold' ? typography.fontWeight.bold : typography.fontWeight.regular)};
  line-height: ${typography.lineHeight.xxLarge};
  color: ${(props) =>
    props.color === 'gray' ? colors.base.gray : props.color === 'XDark' ? colors.base.grayXDark : colors.state.success};
  margin: 0;
`;
