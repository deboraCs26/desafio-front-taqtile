import styled from 'styled-components';
import { colors } from '../colors/colors';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.base.white};
  box-shadow: 0px 2px 8px 0px rgba(55, 84, 102, 0.15);
  width: 15%;
  border-radius: 10px;
  margin: 20px;
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
  Padding-bottom: 16px;
`;

export const StyleTextProductor = styled.div``;

export const StylePriceProductor = styled.div``;

export const StyleButtonProductor = styled.div``;
