import React from 'react';
import styled from 'styled-components';
import { colors } from '../../colors/colors';
import { typography } from '../typography';

interface PriceProps {
  children: React.ReactNode;
  weight?: 'bold' | 'semiBold' | 'regular';
  size?: 'XLarge' | 'medium';
  color?: 'grayLight' | 'primary';
  height?: 'small' | 'XLarge';
}

const weight = {
  base: {
    bold: typography.fontWeight.bold,
    semiBold: typography.fontWeight.semiBold,
    regular: typography.fontWeight.regular,
  },
};

export const StyledPrice = styled.p<PriceProps>`
  font-family: ${typography.family.primary};
  font-size: ${(props) => (props.size === 'XLarge' ? typography.fontSize.XLarge : typography.fontSize.medium)};
  font-weight: ${(props: PriceProps) => (props.weight ? weight.base[props.weight] : '')};
  line-height: ${(props) => (props.height === 'small' ? typography.lineHeight.small : typography.lineHeight.XLarge)};
  color: ${(props) =>
    props.color === 'grayLight' ? colors.base.grayLight : props.color === 'primary' ? colors.brand.primary : ''};
  margin: 0;
`;
