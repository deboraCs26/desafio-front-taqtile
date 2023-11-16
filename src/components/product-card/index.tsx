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
  StyleButtonProductor,
} from './style';
import { Stepper } from '../stepper';
import { Price } from '../typography/price/style';
import { StarRate } from '../rate';
import { Button } from '../button/button';
import { Separator } from '../separator/separator';

interface ProductorCardProps {
  promotion?: string;
  description?: string;
  title?: string;
  price?: string;
  body?: string;
}

export const ProductorCard = ({ body, title, price, description, promotion }: ProductorCardProps) => {
  const cardClick = () => {
    alert('detalhe de produtos em construção');
  };
  return (
    <ProductContainer>
      <StyleCardProductor onClick={cardClick}>
        <StyleImageProductor>
          <img src={imgCard} alt="Imagem do produto" />
        </StyleImageProductor>

        <StyleTextProductor>
          <Heading1>{title}</Heading1>
          <Body2 color="gray" size="small" weight="regular" height="large">
            {description}
          </Body2>

          <Separator size="small" />
          <StarRate />
        </StyleTextProductor>
        <>
          {promotion ? (
            <Price color="grayLight" weight="semiBold" size="medium" style={{ textDecoration: 'line-through' }}>
              {promotion}
            </Price>
          ) : (
            <Separator size="small" />
          )}
        </>
        <Separator size="medium" />
        <StylePriceProductor>
          <Price color="primary" weight="bold" size="XLarge" height="XLarge">
            {price}
          </Price>
          <Body2 color="gray">{body}</Body2>
        </StylePriceProductor>

        <StyleButtonProductor>
          <Stepper />
          <Separator size="small" horizontal />
          <Button variant="primary">Adicionar</Button>
        </StyleButtonProductor>
      </StyleCardProductor>
    </ProductContainer>
  );
};
