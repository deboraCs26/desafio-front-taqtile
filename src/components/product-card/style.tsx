import styled from 'styled-components';
import { colors } from '../colors/colors';
import { typography } from '../typography/typography';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.base.white};
  box-shadow: 0px 2px 8px 0px rgba(55, 84, 102, 0.15);
  width: 15%;
  border-radius: ${typography.borderRadius.mediumRadius};
  margin: 20px;
  cursor: pointer;
`;

export const StyleCardProductor = styled.div`
  display-flex;
  justify-content: center;
  aling-items: center;
  padding: 16px;
`;

export const StyleImageProductor = styled.div`
  display-flex;
  text-align: center;
  padding-bottom: 16px;
`;

export const StyleTextProductor = styled.div`
  padding-bottom: 16px;
`;

export const StyleButtonProductor = styled.div`
  display: flex;
  padding-left: 16px;
`;

export const StylePromotionProductor = styled.div`
  display: flex;
`;
