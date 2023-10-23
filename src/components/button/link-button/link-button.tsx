import { LinkButtonProps } from './style-link-button';
import styled from 'styled-components';
import { colors } from '../../colors/colors';
import { typography } from '../../typography/typography';

export const StyleLinkButton = styled.button<LinkButtonProps>`
  text-decoration: none;
  color: ${({ color }) => (color === 'stateError' ? colors.state.statesError : colors.brand.ctaDark)};
  font-weight: ${typography.fontWeight.bold};
  width: ${({ expanded }) => (expanded ? '100%' : '')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background: none;
  border: none;
  padding: 8px 16px;
`;
