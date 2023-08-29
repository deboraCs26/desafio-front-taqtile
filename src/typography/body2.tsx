import React from 'react';
import { colors } from '../colors/colors';
import { typography } from './typography';

interface Body2Props {
  children: React.ReactNode;
  weight?: 'semiBold' | 'regular';
  color?: 'ctaDark' | 'gray';
  height?: 'large' | 'medium';
}

export const Body2 = ({ children, weight, color, height }: Body2Props) => {
  return (
    <body
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.fontSize.large,
        fontWeight: weight === 'semiBold' ? typography.fontWeight.semiBold : typography.fontWeight.regular,
        lineHeight: height === 'large' ? typography.lineHeight.large : typography.lineHeight.medium,
        color: color === 'ctaDark' ? colors.brand.ctaDark : colors.base.gray,
        margin: 0,
      }}
    >
      {children}
    </body>
  );
};
