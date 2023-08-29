import React from 'react';
import { colors } from '../colors/colors';
import { typography } from './typography';

interface H3Props {
  children: React.ReactNode;
}

export const H3 = ({ children }: H3Props) => {
  return (
    <h3
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.fontSize.medium,
        fontWeight: typography.fontWeight.bold,
        lineHeight: typography.lineHeight.XLarge,
        color: colors.base.grayDark,
        margin: 0,
      }}
    >
      {children}
    </h3>
  );
};
