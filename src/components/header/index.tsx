import React, { useState, useEffect } from 'react';
import {
  StyledCartIcon,
  StyledHeader,
  StyledHeaderInput,
  StyledLinkButton,
  StyledMenuHeader,
  StyledNumberCart,
} from './style';
import logo from './logo.svg';
import shopping from './icons/cart.png';
import logar from './icons/logar.png';
import menu from './icons/menu.png';
import { StyledLogo } from './style';
import { CustomInput } from '../input';
import { LinkButtonComponent } from '../button/link-button/style-link-button';
import { Separator } from '../separator/separator';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  const addToCart = () => {
    setCartItemsCount(cartItemsCount + 1);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <StyledHeader>
      <StyledLogo>
        <img src={logo} alt="logo" className="logoHeader" />
        <Separator size="medium" horizontal />

        <StyledHeaderInput>
          <CustomInput label="Digite o que você procura" expand={true} icon={faSearch} />
        </StyledHeaderInput>

        <Separator size="small" horizontal />

        {isMobile && (
          <StyledMenuHeader>
            <img src={menu} alt="menu" />
          </StyledMenuHeader>
        )}

        {!isMobile && (
          <StyledLinkButton>
            <img src={logar} alt="Default profile picture" />
            <LinkButtonComponent color="baseGray" semiBold largeText>
              Entrar
            </LinkButtonComponent>
          </StyledLinkButton>
        )}

        <StyledCartIcon onClick={addToCart}>
          <img src={shopping} alt="Shopping cart" />
          <StyledNumberCart>{cartItemsCount}</StyledNumberCart>

          {isMobile ? (
            <LinkButtonComponent color="baseGray">Carrinho</LinkButtonComponent>
          ) : (
            <LinkButtonComponent color="baseGray" semiBold largeText>
              Carrinho
            </LinkButtonComponent>
          )}
        </StyledCartIcon>
      </StyledLogo>
    </StyledHeader>
  );
};
