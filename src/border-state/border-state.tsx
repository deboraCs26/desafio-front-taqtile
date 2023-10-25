import { colors } from '../colors/colors';

interface BorderProps {
  focused?: boolean;
  error?: string;
  value: string;
}

const borderStyle = {
  focused: colors.brand.primaryGradient,
  error: colors.state.statesError,
  default: colors.base.grayLight,
  border: colors.base.grayLight,
};
export const getBorderStyle = (props: BorderProps) => {
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
