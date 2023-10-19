import React from 'react';
import { InputContainer, StyledInput, RelativeContainer } from './style';
import { Label } from '../typography/label';

export interface InputProps {
  label?: string;
  password?: boolean;
  expand?: boolean;
  placeholder?: string | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  required?: boolean;
  focused?: boolean;
  error?: boolean;
}

export const CustomInput = ({ label, password, placeholder, error, value, focused, onChange }: InputProps) => {
  const inputId = `custom-input-${label ?? 'default'}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <InputContainer>
      <Label htmlFor={inputId}>{label}</Label>
      <RelativeContainer>
        <StyledInput
          type={password ? 'password' : 'text'}
          required
          id={inputId}
          {...(placeholder && { placeholder })}
          value={value}
          placeholder={label}
          onChange={handleChange}
          focused={focused}
          error={error}
        />
      </RelativeContainer>
    </InputContainer>
  );
};
