import styled from 'styled-components';
import { colors } from '../../colors/colors';
import { typography } from '../typography';

export const StyledLabel = styled.label`
  font-family: ${typography.family.primary};
  font-size: ${typography.fontSize.medium};
  font-weight: ${typography.fontWeight.regular};
  line-height: ${typography.lineHeight.XLarge};
  color: ${colors.base.grayDark};
  margin: 0;
`;
