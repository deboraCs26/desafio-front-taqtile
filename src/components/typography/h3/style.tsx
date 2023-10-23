import styled from 'styled-components';
import { colors } from '../../colors/colors';
import { typography } from '../typography';

export const Heading3 = styled.h3`
  font-family: ${typography.family.primary};
  font-size: ${typography.fontSize.medium};
  font-weight: ${typography.fontWeight.bold};
  line-height: ${typography.lineHeight.XLarge};
  color: ${colors.base.grayDark};
  margin: 0;
`;
