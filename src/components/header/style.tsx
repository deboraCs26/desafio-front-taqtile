import styled from 'styled-components';
import { typography } from '../typography/typography';
import { colors } from '../colors/colors';

export const StyledHeader = styled.header`
  padding: 16px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledHeaderInput = styled.div`
  display: flex;
  align-items: center;
  width: 60em;
`;

export const StyledLinkButton = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2em;
  cursor: pointer;
`;

export const StyledCartIcon = styled.div`
  position: relative;
`;

export const StyledNumberCart = styled.div`
  position: absolute;
  top: 8%;
  left: 10px;
  background-color: ${colors.brand.ctaDark};
  color: ${colors.base.white};
  border-radius: 50%;
  padding: 2px 6px;
  font-size: ${typography.fontSize.small};
  transform: translateY(-70%);
`;
