import styled from 'styled-components';
import { typography } from '../typography/typography';

export const StyledBanner = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 16px;
  border-radius: ${typography.borderRadius.mediumRadius};

  img {
    width: 77%;
    height: auto;
  }

  @media screen and (max-width: 480px) {
    display: block;
    padding-left: 16px;
    width: 110%;
    height: 14vh;

    img {
      height: 100%;
    }
  }
`;
