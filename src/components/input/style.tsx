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

export const InputContainer = styled.div<{ expand?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ expand }) => (expand ? '100%' : '20%')};
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const RelativeContainer = styled.div`
  position: relative;

  .iconInput {
    color: ${colors.base.grayLight};
    position: absolute;
    left: 59em;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    @media screen and (max-width: 480px) {
      left: 16em;
    }
  }
`;
