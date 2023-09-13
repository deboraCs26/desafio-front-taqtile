import styled from 'styled-components';
import { InputProps } from './style';
import { colors } from '../colors/colors';

export const StyledInput = styled.input<InputProps>`
  width: ${({ expand }) => (expand ? '100%' : 'calc(100% - 25px)')};
  border-radius: 10px;
  border: 1px solid var(--base-gray-light, #99a2ab);
  background: var(--base-background, #f9f9f9);
  outline: none;
  padding: 12px 20px;
  margin-top: 8px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin: 20px;
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
