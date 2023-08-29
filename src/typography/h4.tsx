import React from 'react';
import { colors } from '../colors/colors';
import { typography } from './typography';

interface H4Props {
  children: React.ReactNode;
  color?: 'grayDark' | 'gray';
}

export const H4 = ({ children, color }: H4Props) => {
  return (
    <h4
      style={{
        fontFamily: typography.family.primary,
        fontSize: typography.fontSize.large,
        fontWeight: typography.fontWeight.semiBold,
        lineHeight: typography.lineHeight.xxLarge,
        color: color === 'grayDark' ? colors.base.grayDark : colors.base.gray,
        margin: 0,
      }}
    >
      {children}
    </h4>
  );
};
