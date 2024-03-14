import styled from 'styled-components';
import { colors } from '../colors/colors';
import { typography } from '../typography/typography';

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid ${colors.base.white};
  box-shadow: 0px 2px 8px 0px rgba(55, 84, 102, 0.15);
  border-radius: ${typography.borderRadius.mediumRadius};
  margin: 20px;
  cursor: pointer;
  overflow: hidden;
  width: 200px;
  padding: 16px;

  @media screen and (max-width: 480px) {
    width: 100%;
    margin: 16px;
    margin-bottom: 24px;
  }
`;

export const StyleCardProductor = styled.div`
  padding: 16px;
  .title {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: pre-line;
  }

  @media screen and (max-width: 480px) {
    padding: 16px;
  }
`;

export const StyleImageProductor = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-bottom: 16px;
`;

export const StyleButtonProductor = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const StylePromotionProductor = styled.div`
  display: flex;
`;
