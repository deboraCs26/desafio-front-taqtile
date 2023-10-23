import React from 'react';
import styled from 'styled-components';

interface SeparatorProps {
  size: 'small' | 'medium' | 'XSmall' | 'large' | 'XLarge';
  horizontal?: boolean;
}

const StyledSeparator = styled.div<SeparatorProps>`
  ${({ size, horizontal }) => {
    const dimension = horizontal ? 'width' : 'height';

    const sizeOptions = {
      small: '8px',
      medium: '16px',
      large: '24px',
      XSmall: '4px',
      XLarge: '32px',
    };

    const height = sizeOptions[size] || '16px';

    return `
      ${dimension}: ${height};
    `;
  }};
`;

export const Separator = (props: SeparatorProps) => <StyledSeparator {...props} />;
