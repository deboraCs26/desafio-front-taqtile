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
      <H4>Heading 4</H4>
      <Body1 color="gray" weight="bold">
        Body1
      </Body1>
      <Body2 color="errorDark" height="large" size="large">
        Body2
      </Body2>
      <Price weight="semiBold" size="XLarge" height="XLarge">
        Price
      </Price>
    </div>
  );
}
