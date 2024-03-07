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
  }
`;

export const StylePromotionProductor = styled.div`
  display: flex;
`;
