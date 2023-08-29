import React from 'react';
import { colors } from '../colors/colors';
import { typography } from './typography';

interface Body2Props {
  children: React.ReactNode;
  weight?: 'semiBold' | 'regular';
  color?: 'ctaDark' | 'gray' | 'grayDark' | 'errorDark';
  height?: 'large' | 'medium';
  size?: 'large' | 'small';
}

export const Body2 = ({ children, weight, color, height, size }: Body2Props) => {
  let textColor;

  if (color === 'ctaDark') {
    textColor = colors.brand.ctaDark;
  } else if (color === 'gray') {
    textColor = colors.base.gray;
  } else if (color === 'grayDark') {
    textColor = colors.base.grayDark;
  } else if (color === 'errorDark') {
    textColor = colors.state.errorDark;
  } else {
    textColor = '';
  }

  return (
    <body
      style={{
        fontFamily: typography.family.primary,
        fontSize: size === 'large' ? typography.fontSize.large : typography.fontSize.small,
        fontWeight: weight === 'semiBold' ? typography.fontWeight.semiBold : typography.fontWeight.regular,
        lineHeight: height === 'large' ? typography.lineHeight.large : typography.lineHeight.medium,
        color: textColor,
        margin: 0,
      }}
    >
      {children}
    </body>
  );
};
