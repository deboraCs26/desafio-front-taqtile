import React from 'react';
import { StyledHeading1 } from './typography/h1/style';
import { StyledHeading2 } from './typography/h2/style';
import { StyledHeading3 } from './typography/h3/style';
import { StyledHeading4 } from './typography/h4/style';
import { StyledBody1 } from './typography/body1/style';
import { StyledBody2 } from './typography/body2/style';
import { StyledPrice } from './typography/price/style';

export function App() {
  return (
    <div>
      <StyledHeading1>Heading 1</StyledHeading1>
      <StyledHeading2>Heading 2</StyledHeading2>
      <StyledHeading3>Heading 3</StyledHeading3>
      <StyledHeading4 color="gray">Heading 4</StyledHeading4>
      <StyledHeading4 color="grayXDark">Heading 4</StyledHeading4>
      <StyledHeading4 color="grayDark">Heading 4</StyledHeading4>
      <StyledBody1 color="XDark" weight="bold">
        Body1
      </StyledBody1>
      <StyledBody1 color="gray" weight="regular">
        Body1
      </StyledBody1>
      <StyledBody1 color="success">Body1</StyledBody1>
      <StyledBody2 color="errorDark" height="large" size="large" weight="regular">
        Body2
      </StyledBody2>
      <StyledBody2 color="ctaDark" weight="semiBold" height="medium" size="small">
        Body2
      </StyledBody2>
      <StyledBody2 color="gray">Body2</StyledBody2>
      <StyledBody2 color="grayDark">Body2</StyledBody2>
      <StyledPrice color="grayLight" weight="semiBold" size="XLarge" height="XLarge">
        Price
      </StyledPrice>
      <StyledPrice color="primary" weight="bold" size="medium" height="small">
        Price
      </StyledPrice>
      <StyledPrice weight="regular">Price</StyledPrice>
    </div>
  );
}
