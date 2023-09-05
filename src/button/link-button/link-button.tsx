import { LinkButtonProps } from './style-link-button';
import styled from 'styled-components';
import { colors } from '../../colors/colors';
import { typography } from '../../typography/typography';

export const StyleLinkButton = styled.a<LinkButtonProps>`
  text-decoration: none;
  background: transparent;
  color: ${(props) => (props.color === 'stateError' ? colors.state.statesError : colors.brand.ctaDark)};
  font-weight: ${typography.fontWeight.bold};
  width: ${(props) => (props.expanded ? '100%' : 'auto')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  cursor: pointer;
  border: none;
  padding: 8px 16px;
`;
