import React from 'react';
import banner from './img-banner.png';
import { StyledBanner } from './style';

export const Banner = () => {
  return (
    <StyledBanner>
      <img src={banner} alt="imagem banner" />;
    </StyledBanner>
  );
};
