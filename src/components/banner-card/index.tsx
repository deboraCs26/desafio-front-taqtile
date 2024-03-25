import React from 'react';
import {
  StyledBannerCard,
  StyledBannerCardContainer,
  StyledBannerCarousel,
  StyledImage,
  StyledTextBannerCard,
} from './style';
import imgCatalogOffers from './image-banner-card/catalog-offers.svg';
import imgMaterialsUse from './image-banner-card/materials-use.svg';
import imgBiosafetyPPE from './image-banner-card/biosafety-ppe.svg';
import imgOrofacialHamonization from './image-banner-card/orofacial-harmonization.svg';
import imgFashion from './image-banner-card/fashion.svg';
import imgEquipment from './image-banner-card/equipment.svg';
import { colors } from '../colors/colors';
import { Label } from '../typography/label';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useIsMobile } from '../../resize-page/mobile-use-case';

const cardsBannerCard = [
  {
    id: 1,
    imgSrc: imgCatalogOffers,
    altText: 'Catálogo de ofertas',
    bgColor: colors.accessory.purple,
    text: 'Catálogo de ofertas',
  },
  {
    id: 2,
    imgSrc: imgMaterialsUse,
    altText: 'Materiais de uso frequente',
    bgColor: colors.accessory.navy,
    text: 'Materiais de uso frequente',
  },
  {
    id: 3,
    imgSrc: imgEquipment,
    altText: 'Equipamentos',
    bgColor: colors.brand.secondaryDark,
    text: 'Equipamentos',
  },
  {
    id: 4,
    imgSrc: imgBiosafetyPPE,
    altText: 'Biosegurança e EPIs',
    bgColor: colors.accessory.greenPool,
    text: 'Biosegurança e EPIs',
  },
  {
    id: 5,
    imgSrc: imgOrofacialHamonization,
    altText: 'Harmonização orofacial',
    bgColor: colors.accessory.blue,
    text: 'Harmonização orofacial',
  },
  {
    id: 6,
    imgSrc: imgFashion,
    altText: 'Moda',
    bgColor: colors.brand.ctaDark,
    text: 'Moda',
  },
];

export const BannerCard = () => {
  const isMobile = useIsMobile();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <StyledBannerCardContainer>
      {isMobile ? (
        <StyledBannerCarousel>
          <Carousel
            responsive={responsive}
            customTransition="transform 500ms ease-in-out"
            additionalTransfrom={0}
            className="carousel-without-arrows"
            itemClass="custom-carousel-item"
            arrows={false}
          >
            {cardsBannerCard.map((item) => (
              <StyledBannerCard key={item.id} bgColor={item.bgColor}>
                <StyledImage src={item.imgSrc} alt={item.altText} />
                <StyledTextBannerCard>
                  <Label semiBold largeText>
                    {item.text}
                  </Label>
                </StyledTextBannerCard>
              </StyledBannerCard>
            ))}
          </Carousel>
        </StyledBannerCarousel>
      ) : (
        cardsBannerCard.map((item) => (
          <StyledBannerCard key={item.id} bgColor={item.bgColor}>
            <StyledImage src={item.imgSrc} alt={item.altText} />
            <StyledTextBannerCard>
              <Label semiBold largeText>
                {item.text}
              </Label>
            </StyledTextBannerCard>
          </StyledBannerCard>
        ))
      )}
    </StyledBannerCardContainer>
  );
};
