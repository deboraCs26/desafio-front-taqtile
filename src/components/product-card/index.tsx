import React from 'react';
import imgCard from './../product-card/Image-card.png';
import { Body2 } from '../typography/body2/style';
import { Heading1 } from '../typography/h1/style';
import {
  ProductContainer,
  StyleCardProductor,
  StyleImageProductor,
  StyleButtonProductor,
  StylePromotionProductor,
} from './style';
import { Stepper } from '../stepper';
import { Price } from '../typography/price/style';
import { StarRate } from '../rate';
import { Button } from '../button/button';
import { Separator } from '../separator/separator';

interface ProductorCardProps {
  description?: string;
  title?: string;
  price?: number;
  body?: string;
  installment_quantity?: number;
  installment_value?: number;
  promotion?: number;
}

const formatNumberWithComma = (value: number | undefined): string => {
  if (value === undefined) return '';
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
};

export const ProductorCard = ({
  body,
  title,
  price,
  description,
  installment_quantity,
  installment_value,
  promotion,
}: ProductorCardProps) => {
  const cardClick = () => {
    alert('detalhe de produtos em construção');
  };

  const formattedPrice = `R$ ${formatNumberWithComma(price)}`;
  const formattedInstallmentValue = `R$ ${formatNumberWithComma(installment_value)}`;

  return (
    <ProductContainer>
      <StyleCardProductor onClick={cardClick}>
        <StyleImageProductor>
          <img src={imgCard} alt="Imagem do produto" />
        </StyleImageProductor>

        <Heading1 className="title">{title}</Heading1>
        <Body2 color="gray" size="small" weight="regular" height="large" className="title">
          {description}
        </Body2>

        <Separator size="small" />
        <StarRate />
        <Separator size="large" />

        {!!promotion && (
          <StylePromotionProductor>
            <Price color="grayLight" weight="semiBold" size="medium">
              De
            </Price>
            <Separator size="XSmall" horizontal />
            <Price color="grayLight" weight="semiBold" size="medium" style={{ textDecoration: 'line-through' }}>
              R$ {formatNumberWithComma(promotion)}
            </Price>
            <Separator size="XSmall" horizontal />
            <Price color="grayLight" weight="semiBold" size="medium">
              por
            </Price>
            <Separator size="large" />
          </StylePromotionProductor>
        )}
        <Price color="primary" weight="bold" size="XLarge" height="XLarge">
          {formattedPrice}
        </Price>

        {!!installment_quantity && !!formattedInstallmentValue && (
          <>
            <Body2 color="gray">
              {installment_quantity}x de {formattedInstallmentValue}
            </Body2>
            <Separator size="small" />
          </>
        )}
        <Body2 color="gray">{body}</Body2>
      </StyleCardProductor>
      <StyleButtonProductor>
        <Stepper />
        <Separator size="small" horizontal />
        <Button variant="primary">Adicionar</Button>
      </StyleButtonProductor>
    </ProductContainer>
  );
};
