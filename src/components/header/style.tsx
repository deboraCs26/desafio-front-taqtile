import styled from 'styled-components';
import { typography } from '../typography/typography';
import { colors } from '../colors/colors';

export const StyledHeader = styled.header`
  padding: 16px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 480px) {
    height: 13vh;
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
      margin-left: 32vw;
      margin-bottom: 14px;
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
  display: flex;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-left: 68vw;
    padding-bottom: 8vh;
    position: absolute;
  }
`;

export const StyledNumberCart = styled.div`
  position: absolute;
  margin-left: 8px;
  background-color: ${colors.brand.ctaDark};
  color: ${colors.base.white};
  border-radius: 50%;
  padding: 2px 6px;
  font-size: ${typography.fontSize.small};
  transform: translateY(-60%);

  @media screen and (max-width: 480px) {
    margin-left: 26px;
  }
`;

export const StyledMenuHeader = styled.div`
  position: absolute;
  transform: translateY(-70%);
`;
