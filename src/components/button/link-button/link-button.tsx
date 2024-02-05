import { LinkButtonProps } from './style-link-button';
import styled from 'styled-components';
import { colors } from '../../colors/colors';
import { typography } from '../../typography/typography';

const color = {
  base: {
    ctaDark: colors.brand.ctaDark,
    baseGray: colors.base.gray,
    stateError: colors.state.statesError,
  },
};

export const StyleLinkButton = styled.button<LinkButtonProps>`
  text-decoration: none;
  color: ${(props: LinkButtonProps) => (props.color ? color.base[props.color] : '')};
  font-weight: ${typography.fontWeight.bold};
  width: ${({ expanded }) => (expanded ? '100%' : '')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background: none;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;
