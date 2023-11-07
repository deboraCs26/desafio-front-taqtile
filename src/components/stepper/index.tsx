import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import {
  StepperButton,
  StepperContainer,
  StepperValue,
  StepperBorder,
  StyledFontAwesomeIcon,
  StyledInput,
} from './style';
import { Label } from '../typography/label';
import { colors } from '../colors/colors';

export interface StepperProps {
  icon?: IconDefinition;
  disabled?: boolean;
  expand?: boolean;
  value?: number;
}

export const Stepper = () => {
  const [incrementClicked, setIncrementClicked] = useState(false);
  const [inputValue, setInputValue] = useState('0');

  const handleIncrement = () => {
    const incrementedValue = Number(inputValue) + 1;
    setInputValue(incrementedValue.toString());
    setIncrementClicked(true);
  };

  const handleDecrement = () => {
    const decrementValue = Number(inputValue) - 1;
    if (decrementValue >= 0) {
      setInputValue(decrementValue.toString());
    }
    setIncrementClicked(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <StepperContainer>
      <StepperBorder>
        <StepperButton onClick={handleDecrement}>
          <FontAwesomeIcon icon={faMinus} style={{ color: colors.base.grayLight }} />
        </StepperButton>
        <StepperValue>
          <Label>
            <StyledInput value={inputValue} onChange={handleInputChange} />
          </Label>
        </StepperValue>
        <StepperButton onClick={handleIncrement}>
          <StyledFontAwesomeIcon icon={faPlus} incrementClicked={incrementClicked} />
        </StepperButton>
      </StepperBorder>
    </StepperContainer>
  );
};
