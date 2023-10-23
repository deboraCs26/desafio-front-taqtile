import styled from 'styled-components';
import { InputProps } from '.';
import { colors } from '../colors/colors';

const borderStyle = {
  focused: colors.brand.primaryGradient,
  error: colors.state.statesError,
  default: colors.base.grayLight,
  border: colors.base.grayLight,
};

const getBorderStyle = (props: InputProps) => {
  if (props.focused) {
    return borderStyle.focused;
  } else if (props.error) {
    return borderStyle.error;
  } else if (props.value) {
    return borderStyle.default;
  } else {
    return borderStyle.border;
  }
};

export const StyledInput = styled.input<InputProps>`
  width: ${({ expand }) => (expand ? '100%' : 'calc(100% - 25px)')};
  border-radius: 10px;
  border: 1px solid ${(props) => getBorderStyle(props)};
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
