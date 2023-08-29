import React from 'react';
import { colors } from '../colors/colors';
import { typography } from './typography';

interface PriceProps {
  children: React.ReactNode;
  weight?: 'bold' | 'semiBold' | 'regular';
  size?: 'XLarge' | 'medium';
  height?: 'XLarge' | 'small';
  color?: 'grayLight' | 'primary';
}

export const Price = ({ children, weight, size, color }: PriceProps) => {
  return (
    <p
      style={{
        fontFamily: typography.family.primary,
        fontSize: size === 'XLarge' ? typography.fontSize.XLarge : typography.fontSize.medium,
        fontWeight:
          weight === 'bold'
            ? typography.fontWeight.bold
            : weight === 'semiBold'
            ? typography.fontWeight.semiBold
            : typography.fontWeight.regular,
        color: color === 'grayLight' ? colors.base.grayLight : colors.brand.primary,
        margin: 0,
      }}
    >
      {children}
    </p>
  );
};
