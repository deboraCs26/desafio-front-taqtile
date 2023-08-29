import React from 'react';
import { colors } from '../colors/colors';
import { typography } from './typography';

interface Body1Props {
  children: React.ReactNode;
  weight?: 'bold' | 'regular';
  color?: 'grayDark' | 'success';
}

export const Body1 = ({ children, weight, color }: Body1Props) => {
  return (
    <body
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.fontSize.large,
        fontWeight: weight === 'bold' ? typography.fontWeight.bold : typography.fontWeight.regular,
        lineHeight: typography.lineHeight.xxLarge,
        color: color === 'grayDark' ? colors.base.grayDark : colors.state.success,
        margin: 0,
      }}
    >
      {children}
    </body>
  );
};
