import styled from 'styled-components';
import { InputProps } from '.';
import { colors } from '../colors/colors';

export const StyledInput = styled.input<InputProps>`
  width: ${({ expand }) => (expand ? '100%' : 'calc(100% - 25px)')};
  border-radius: 10px;
  border: 1px solid ${colors.base.grayLight};
  background: ${colors.base.background};
  outline: none;
  padding: 12px 20px;
  margin-top: 8px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 35%;
  right: 5px;
  color: ${colors.base.gray};
`;

export const RelativeContainer = styled.div`
  position: relative;
`;
