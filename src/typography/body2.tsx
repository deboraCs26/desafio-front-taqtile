import React from 'react';
import { colors } from '../colors/colors';
import { typography } from './typography';

interface Body2Props {
  children: React.ReactNode;
  weight?: 'semiBold' | 'regular';
  color?: 'ctaDark' | 'gray' | 'grayDark';
  height?: 'large' | 'medium';
  size?: 'large' | 'small';
}

export const Body2 = ({ children, weight, color, height, size }: Body2Props) => {
  return (
    <body
      style={{
        fontFamily: typography.family.primary,
        fontSize: size === 'large' ? typography.fontSize.large : typography.fontSize.small,
        fontWeight: weight === 'semiBold' ? typography.fontWeight.semiBold : typography.fontWeight.regular,
        lineHeight: height === 'large' ? typography.lineHeight.large : typography.lineHeight.medium,
        color: color === 'ctaDark' ? colors.brand.ctaDark : color === 'gray' ? colors.base.gray : colors.base.grayDark,

        margin: 0,
      }}
    >
      {children}
    </body>
  );
};
