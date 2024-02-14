import styled from 'styled-components';
import { typography } from '../typography/typography';
import { colors } from '../colors/colors';

export const StyledHeader = styled.header`
  padding: 16px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 480px) {
    height: 11vh;
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    padding-top: 12px;

    .logoHeader {
      display: block;
      width: 22%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 4px;
    }
  }
`;

export const StyledHeaderInput = styled.div`
  display: flex;
  align-items: center;
  width: 55%;

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

export const StyledLinkButton = styled.div`
  display: flex;
  align-items: center;
  padding-left: 22px;
  cursor: pointer;
`;

export const StyledCartIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-left: 68%;
    top: auto;
    padding-bottom: 29%;
    position: absolute;

    .carrinhoCompras {
      transform: translateY(70%);
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
    margin-left: 28px;
    top: auto;
    transform: translateY(4%);
  }
`;

export const StyledMenuHeader = styled.div`
  top: auto;
  transform: translateY(-100px);
`;
