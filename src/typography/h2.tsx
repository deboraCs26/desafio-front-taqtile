import React from 'react';
import { colors } from '../colors/colors';
import { typography } from './typography';

interface H2Props {
  children: React.ReactNode;
}

export const H2 = ({ children }: H2Props) => {
  return (
    <h2
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.fontSize.XLarge,
        fontWeight: typography.fontWeight.bold,
        lineHeight: typography.lineHeight.XLarge,
        color: colors.brand.primary,
        margin: 0,
      }}
    >
      {children}
    </h2>
  );
};
