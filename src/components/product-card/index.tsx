import React from 'react';
import imgCard from './../product-card/Image-card.png';
import { Body2 } from '../typography/body2/style';
import { Heading1 } from '../typography/h1/style';
import {
  ProductContainer,
  StyleCardProductor,
  StyleTextProductor,
  StylePriceProductor,
  StyleImageProductor,
} from './style';
import { Stepper } from '../stepper';
import { Price } from '../typography/price/style';
import { StarRate } from '../rate';
import { Button } from '../button/button';
import { Separator } from '../separator/separator';

interface ProductorCardProps {
  text?: string;
  title?: string;
  price?: string;
  body?: string;
}

export const ProductorCard = ({ body, title, price, text }: ProductorCardProps) => {
  return (
    <ProductContainer>
      <StyleCardProductor>
        <StyleImageProductor>
          <img src={imgCard} alt="Imagem do produto" />
        </StyleImageProductor>

        <StyleTextProductor>
          <Heading1>{title}</Heading1>
          <Body2 color="gray" size="small" weight="regular" height="large">
            {text}
          </Body2>

          <Separator size="small" />
          <StarRate />
        </StyleTextProductor>

        <Separator size="medium" />
        <StylePriceProductor>
          <Price color="primary" weight="bold" size="XLarge" height="XLarge">
            {price}
          </Price>
          <Body2>{body}</Body2>
        </StylePriceProductor>

        <Stepper />
        <Button variant="primary">Adicionar</Button>
      </StyleCardProductor>
    </ProductContainer>
  );
};
