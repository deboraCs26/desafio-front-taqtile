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
  onChange?: (value: number) => void;
}

export const Stepper: React.FC<StepperProps> = ({ onChange, expand }) => {
  const [incrementClicked, setIncrementClicked] = useState(false);
  const [inputValue, setInputValue] = useState<number>(0);

  const handleIncrement = () => {
    const incrementedValue = inputValue + 1;
    setInputValue(incrementedValue);
    setIncrementClicked(true);
    onChange?.(incrementedValue);
  };

  const handleDecrement = () => {
    const decrementValue = inputValue - 1;
    if (decrementValue >= 0) {
      setInputValue(decrementValue);
      onChange?.(decrementValue);
    }
    setIncrementClicked(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setInputValue(newValue);
    onChange?.(newValue);
  };

  return (
    <StepperContainer>
      <StepperBorder expand={expand}>
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
