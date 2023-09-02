import styled from 'styled-components';
import { colors } from '../../colors/colors';
import { typography } from '../typography';

export const StyledHeading4 = styled.h4`
  font-family: ${typography.family.primary};
  font-size: ${typography.fontSize.large};
  font-weight: ${typography.fontWeight.semiBold};
  line-height: ${typography.lineHeight.xxLarge};
  color: ${(props) =>
    props.color === 'grayXDark'
      ? colors.base.grayXDark
      : props.color === 'gray'
      ? colors.base.grayDark
      : colors.base.gray};

  margin: 0;
`;
