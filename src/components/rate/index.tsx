import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { StyledStar } from './style';
import { colors } from '../colors/colors';

type StateProps = {
  color?: 'cta' | 'grayLight';
  onClick?: () => void;
};

export const StarRate: React.FC<StateProps> = () => {
  const [rating, setRating] = useState<number>(-1);

  const handleClick = (index: number) => {
    setRating(index);
  };

  const starIcon = (index: number) => (
    <FontAwesomeIcon
      icon={faStar}
      size="1x"
      style={{ color: index <= rating ? colors.brand.cta : colors.base.grayLight }}
      onClick={() => handleClick(index)}
    />
  );

  return (
    <StyledStar>
      {Array.from({ length: 5 }, (_, index) => (
        <div key={index}>{starIcon(index)}</div>
      ))}
    </StyledStar>
  );
};
