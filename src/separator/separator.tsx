import React from 'react';
import styled from 'styled-components';

interface SeparatorProps {
  size: 'small' | 'medium' | 'XSmall' | 'large' | 'XLarge';
  horizontal?: boolean;
}

const StyledSeparator = styled.div<SeparatorProps>`
  ${({ size, horizontal }) => {
    const dimension = horizontal ? 'width' : 'height';

    let height;

    if (size === 'small') {
      height = '8px';
    } else if (size === 'large') {
      height = '24px';
    } else if (size === 'XSmall') {
      height = '4px';
    } else if (size === 'XLarge') {
      height = '32px';
    } else {
      height = '16px';
    }

    return `
      ${dimension}: ${height};
    `;
  }};
`;

export const Separator = (props: SeparatorProps) => <StyledSeparator {...props} />;
