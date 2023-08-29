import React from 'react';
import { H1 } from './typography/h1';
import { H2 } from './typography/h2';
import { H3 } from './typography/h3';
import { H4 } from './typography/h4';
import { Body1 } from './typography/body1';

export function App() {
  return (
    <div>
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <Body1 color="success">Body</Body1>
    </div>
  );
}
