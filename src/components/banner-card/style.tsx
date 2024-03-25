import styled from 'styled-components';
import { typography } from '../typography/typography';

interface BannerCard {
  bgColor?: string;
}

export const StyledBannerCardContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 82px auto 0 auto;

  @media screen and (max-width: 480px) {
    display: block;
    margin: 0;
  }
`;

export const StyledBannerCard = styled.div<BannerCard>`
  position: relative;
  background-color: ${(props) => props.bgColor};
  border-radius: ${typography.borderRadius.mediumRadius};
  width: 12%;
  height: 44px;
  margin: 16px;

  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    margin: 0;
    width: 100%;
    height: 44px;
    width: 198px;
  }
`;

export const StyledImage = styled.img`
  position: absolute;
  padding: 0 34px;
  transform: translateY(-50%);

  @media screen and (max-width: 480px) {
    transform: translateY(-50%);
  }
`;

export const StyledTextBannerCard = styled.div`
  text-align: center;
  padding: 50px 14px;

  @media screen and (max-width: 480px) {
    white-space: nowrap;
  }
`;

export const StyledBannerCarousel = styled.div`
  @media (max-width: 480px) {
    margin-top: 16px;
  }
  .react-multi-carousel-item {
    width: auto !important;
  }

  @media (max-width: 480px) {
    .custom-carousel-item {
      margin: 28px 0 16px 16px;
      padding: 16px 0;
    }
  }
`;
