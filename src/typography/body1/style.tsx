import styled from 'styled-components';
import { colors } from '../../colors/colors';
import { typography } from '../typography';

export const StyledBody1 = styled.p<{ weight?: 'bold' | 'regular'; color?: 'gray' | 'XDark' | 'success' }>`
  font-family: ${typography.family.primary};
  font-size: ${typography.fontSize.large};
  font-weight: ${(props) => (props.weight === 'bold' ? typography.fontWeight.bold : typography.fontWeight.regular)};
  line-height: ${typography.lineHeight.xxLarge};
  color: ${(props) =>
    props.color === 'gray' ? colors.base.gray : props.color === 'XDark' ? colors.base.grayXDark : colors.state.success};
  margin: 0;
`;
