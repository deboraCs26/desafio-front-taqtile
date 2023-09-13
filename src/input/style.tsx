import React from 'react';
import { InputContainer, StyledInput, RelativeContainer, IconContainer } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Label } from '../typography/label';

export interface InputProps {
  label?: string;
  icon?: IconDefinition;
  password?: boolean;
  expand?: boolean;
  placeholder?: string | undefined;
  className?: string;
}

export const CustomInput = ({ label, password, placeholder, icon }: InputProps) => {
  const inputId = `custom-input-${label ?? 'default'}`;

  return (
    <InputContainer>
      <Label htmlFor={inputId}>{label}</Label>
      <RelativeContainer>
        <StyledInput
          type={password ? 'password' : 'text'}
          required
          id={inputId}
          {...(placeholder && { placeholder })}
        />
        <IconContainer>
          {icon && <FontAwesomeIcon icon={icon} size="lg" style={{ transform: 'rotate(180deg)' }} />}
        </IconContainer>
      </RelativeContainer>
    </InputContainer>
  );
};
