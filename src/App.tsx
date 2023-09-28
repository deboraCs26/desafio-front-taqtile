import React from 'react';
import { Heading1 } from './typography/h1/style';
import { Heading2 } from './typography/h2/style';
import { Heading3 } from './typography/h3/style';
import { Heading4 } from './typography/h4/style';
import { Body1 } from './typography/body1/style';
import { Body2 } from './typography/body2/style';
import { Price } from './typography/price/style';
import { Button } from './button/button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { LinkButtonComponent } from './button/link-button/style-link-button';

export function App() {
  return (
    <div>
      <Heading1>Heading 1</Heading1>
      <Heading2>Heading 2</Heading2>
      <Heading3>Heading 3</Heading3>
      <Heading4 color="gray">Heading 4</Heading4>
      <Heading4 color="grayXDark">Heading 4</Heading4>
      <Heading4 color="grayDark">Heading 4</Heading4>
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
      <Heading1>Styleguide</Heading1>
      <Heading2>Botões</Heading2>
      <Button variant="primary" icon={faPlus} onClick={handleClick}>
        Adicionar
      </Button>
      <Button variant="cta">Fechar pedido</Button>
      <Button variant="secondary">Voltar para o perfil</Button>
      <LinkButtonComponent color="ctaDark">Continuar comprando</LinkButtonComponent>
      <LinkButtonComponent color="stateError">Remover</LinkButtonComponent>
    </div>
  );
}
