import styled from 'styled-components';
import { colors } from '../../colors/colors';
import { typography } from '../typography';

export const StyledHeading2 = styled.h2`
  font-family: ${typography.family.primary};
  font-size: ${typography.fontSize.XLarge};
  font-weight: ${typography.fontWeight.bold};
  line-height: ${typography.lineHeight.XLarge};
  color: ${colors.brand.primary};
  margin: 0;
`;
