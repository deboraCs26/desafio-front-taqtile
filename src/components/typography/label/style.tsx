import styled from 'styled-components';
import { colors } from '../../colors/colors';
import { typography } from '../typography';
import { LabelProps } from '.';

type LabelErrorType = Pick<LabelProps, 'error'>;

export const StyledLabel = styled.label<LabelErrorType & LabelProps>`
  font-family: ${typography.family.primary};
  font-size: ${(props) => (props.largeText ? typography.fontSize.large : typography.fontSize.medium)};
  font-weight: ${(props) => (props.semiBold ? typography.fontWeight.semiBold : typography.fontWeight.regular)};
  line-height: ${typography.lineHeight.XLarge};
  color: ${(props) => (props.error ? colors.state.statesError : colors.base.grayDark)};
  margin: 0;
`;
