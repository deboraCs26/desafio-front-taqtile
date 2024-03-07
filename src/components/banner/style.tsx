import styled from 'styled-components';
import { typography } from '../typography/typography';

export const StyledBanner = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 16px;
  border-radius: ${typography.borderRadius.mediumRadius};

  img {
    width: 82%;
    height: auto;
  }

  @media screen and (max-width: 480px) {
    img {
      border-radius: ${typography.borderRadius.mediumRadius};
      width: 88%;
      height: 12vh;
    }
  }
`;
