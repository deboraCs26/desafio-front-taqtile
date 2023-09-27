import styled from 'styled-components';
import { colors } from '../../colors/colors';
import { typography } from '../typography';
import { LabelProps } from '.';

type LabelErrorType = Pick<LabelProps, 'error'>;

export const StyledLabel = styled.label<LabelErrorType>`
  font-family: ${typography.family.primary};
  font-size: ${typography.fontSize.medium};
  font-weight: ${typography.fontWeight.regular};
  line-height: ${typography.lineHeight.XLarge};
  color: ${(props) => (props.error ? colors.state.statesError : colors.base.grayDark)};
  margin: 0;
`;
