import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { StepperButton, StepperContainer, StepperValue, StepperBorder } from './style';
import { Label } from '../typography/label';
import { colors } from '../colors/colors';

export interface StepperProps {
  icon?: IconDefinition;
  value: number;
  onIncrement: () => void;
  onDecrement?: () => void;
  disabled?: boolean;
  expand?: boolean;
}

export const Stepper = ({ value, onIncrement, onDecrement }: StepperProps) => {
  const [incrementClicked, setIncrementClicked] = useState(false);

  const handleIncrement = () => {
    onIncrement();
    setIncrementClicked(!incrementClicked);
  };

  const handleDecrement = () => {
    if (onDecrement) {
      onDecrement();
    }
  };

  return (
    <StepperContainer>
      <StepperBorder value={value} onIncrement={handleIncrement} onDecrement={handleDecrement}>
        <StepperButton onClick={onDecrement}>
          <FontAwesomeIcon icon={faMinus} style={{ color: colors.base.grayLight }} />
        </StepperButton>
        <StepperValue>
          <Label>{value}</Label>
        </StepperValue>
        <StepperButton onClick={handleIncrement}>
          <FontAwesomeIcon
            icon={faPlus}
            style={{ color: incrementClicked ? colors.brand.primary : colors.base.grayLight }}
          />
        </StepperButton>
      </StepperBorder>
    </StepperContainer>
  );
};
