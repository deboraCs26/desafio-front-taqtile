import React from 'react';
import { H1 } from './typography/h1';
import { H2 } from './typography/h2';
import { H3 } from './typography/h3';
import { H4 } from './typography/h4';
import { Body1 } from './typography/body1';
import { Body2 } from './typography/body2';
import { Price } from './typography/price';

export function App() {
  return (
    <div>
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4 color="gray">Heading 4</H4>
      <H4 color="grayXDark">Heading 4</H4>
      <H4 color="grayDark">Heading 4</H4>
      <Body1 color="XDark" weight="bold">
        Body1
      </Body1>
      <Body1 color="gray" weight="regular">
        Body1
      </Body1>
      <Body1 color="success">Body1</Body1>
      <Body2 color="errorDark" height="large" size="large" weight="regular">
        Body2
      </Body2>
      <Body2 color="ctaDark" weight="semiBold" height="medium" size="small">
        Body2
      </Body2>
      <Body2 color="gray">Body2</Body2>
      <Body2 color="grayDark">Body2</Body2>
      <Price color="grayLight" weight="semiBold" size="XLarge" height="XLarge">
        Price
      </Price>
      <Price color="primary" weight="bold" size="medium" height="small">
        Price
      </Price>
      <Price weight="regular">Price</Price>
    </div>
  );
}
