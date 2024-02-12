import styled from 'styled-components';
import { typography } from '../typography/typography';
import { colors } from '../colors/colors';

export const StyledHeader = styled.header`
  padding: 16px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 480px) {
    height: 6.5em;
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    padding-top: 1em;

    .logoHeader {
      width: 18%;
      padding-left: 7em;
      padding-bottom: 8px;
    }
  }
`;

export const StyledHeaderInput = styled.div`
  display: flex;
  align-items: center;
  width: 60em;

  @media screen and (max-width: 480px) {
    width: 17em;
  }
`;

export const StyledLinkButton = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2em;
  cursor: pointer;
`;

export const StyledCartIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    left: 15em;
    top: auto;
    padding-bottom: 29%;
    position: absolute;

    .carrinhoCompras {
      transform: translateY(1em);
    }
  }
`;

export const StyledNumberCart = styled.div`
  position: absolute;
  left: 10px;
  background-color: ${colors.brand.ctaDark};
  color: ${colors.base.white};
  border-radius: 50%;
  padding: 2px 6px;
  font-size: ${typography.fontSize.small};
  transform: translateY(-60%);

  @media screen and (max-width: 480px) {
    left: 4em;
    top: auto;
    transform: translateY(25%);
  }
`;

export const StyledMenuHeader = styled.div`
  transform: translateY(-6.5em);
`;
