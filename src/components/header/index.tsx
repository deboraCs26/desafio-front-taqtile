import React, { useState } from 'react';
import { StyledCartIcon, StyledHeader, StyledHeaderInput, StyledLinkButton, StyledNumberCart } from './style';
import logo from './logo.svg';
import shopping from './icons/cart.png';
import logar from './icons/logar.png';
import { StyledLogo } from './style';
import { CustomInput } from '../input';
import { LinkButtonComponent } from '../button/link-button/style-link-button';
import { Separator } from '../separator/separator';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const addToCart = () => {
    setCartItemsCount(cartItemsCount + 1);
  };

  return (
    <StyledHeader>
      <StyledLogo>
        <img src={logo} alt="logo" />
        <Separator size="medium" horizontal />

        <StyledHeaderInput>
          <CustomInput label="Digite o que você procura" expand={true} icon={faSearch} />
        </StyledHeaderInput>

        <Separator size="small" horizontal />

        <StyledLinkButton>
          <img src={logar} alt="logar" />
          <LinkButtonComponent color="baseGray">Entrar</LinkButtonComponent>

          <StyledCartIcon className="cart-icon-container" onClick={addToCart}>
            <img src={shopping} alt="carrinho de compras" />
            <StyledNumberCart className="cart-badge">{cartItemsCount}</StyledNumberCart>
          </StyledCartIcon>
          <LinkButtonComponent color="baseGray">Carrinho</LinkButtonComponent>
        </StyledLinkButton>
      </StyledLogo>
    </StyledHeader>
  );
};
