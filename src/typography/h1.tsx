import React from 'react';
import { colors } from '../colors/colors';
import { typography } from './typography';

interface H1Props {
  children: React.ReactNode;
}

export const H1 = ({ children }: H1Props) => {
  return (
    <h1
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.fontSize.xxLarge,
        fontWeight: typography.fontWeight.semiBold,
        lineHeight: typography.lineHeight.xxxxLarge,
        color: colors.base.grayDark,
        margin: 0,
      }}
    >
      {children}
    </h1>
  );
};
