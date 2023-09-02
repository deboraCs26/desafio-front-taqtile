import styled from 'styled-components';
import { colors } from '../../colors/colors';
import { typography } from '../typography';

export const StyledHeading1 = styled.h1`
  font-family: ${typography.family.primary};
  font-size: ${typography.fontSize.xxLarge};
  font-weight: ${typography.fontWeight.semiBold};
  line-height: ${typography.lineHeight.xxxxLarge};
  color: ${colors.base.grayDark};
  margin: 0;
`;
