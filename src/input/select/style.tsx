import styled from 'styled-components';
import { colors } from '../../colors/colors';
import { SelectProps } from '.';

export const StyledSelect = styled.select<SelectProps>`
  width: ${({ expand }) => (expand ? '100%' : 'calc(100% - 25px)')};
  border-radius: 10px;
  border: 1px solid ${colors.base.grayLight};
  background: ${colors.base.background};
  outline: none;
  padding: 12px 20px;
  margin-top: 8px;
`;

export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: column;
  width: 22.3%;
`;
