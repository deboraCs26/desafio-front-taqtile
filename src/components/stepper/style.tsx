import styled from 'styled-components';
import { colors } from '../colors/colors';
import { StepperProps } from '.';
import { getBorderStyle } from '../../border-state/border-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StepperBorder = styled.div<StepperProps>`
  width: ${({ expand }) => (expand ? '100%' : '')};
  border-radius: 10px;
  border: 1px solid ${(props) => getBorderStyle({ ...props, value: String(props.value) ?? '' })};
  background: ${colors.base.background};
  outline: none;
  padding: 12px;
  margin: 8px 0;
  display: flex;
  justify-content: space-around;
`;

export const StepperContainer = styled.div`
  width: 9%;
`;

export const StepperButton = styled.div`
  cursor: pointer;
`;

export const StepperValue = styled.div`
  color: ${colors.base.grayXDark};
  padding: 0 8px;
`;

export const StyledInput = styled.input`
  text-align: center;
  background: ${colors.base.background};
  outline: none;
  border: none;
  width: 100%;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)<{ incrementClicked: boolean }>`
  color: ${(props) => (props.incrementClicked ? colors.brand.primary : colors.base.grayLight)};
`;
