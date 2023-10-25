import styled from 'styled-components';
import { colors } from '../../colors/colors';
import { SelectProps } from '.';
import { getBorderStyle } from '../../../border-state/border-state';

export const StyledSelect = styled.select<SelectProps>`
  width: ${({ expand }) => (expand ? '100%' : 'calc(100% - 25px)')};
  border-radius: 10px;
  border: 1px solid ${(props) => getBorderStyle(props)};
  background: ${colors.base.background};
  outline: none;
  padding: 12px 20px;
  margin: 8px 0;
`;

export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: column;
  width: 22.3%;
`;

export const IconSelect = styled.div`
  padding-right: 8px;
  display: inline-block;
`;
