import styled from 'styled-components';
import { InputProps } from '.';
import { colors } from '../colors/colors';
import { getBorderStyle } from '../../border-state/border-state';

export const StyledInput = styled.input<InputProps>`
  width: ${({ expand }) => (expand ? '100%' : 'calc(100% - 25px)')};
  border-radius: 10px;
  border: 1px solid ${(props) => getBorderStyle({ ...props, value: props.value ?? '' })};
  background: ${colors.base.background};
  outline: none;
  padding: 12px 20px;
  margin: 8px 0;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

export const RelativeContainer = styled.div`
  position: relative;
`;
