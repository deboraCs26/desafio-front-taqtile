import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { InputContainer, StyledInput, RelativeContainer } from './style';
import { Label } from '../typography/label';

export interface InputProps {
  icon?: IconDefinition;
  label?: string;
  text?: string;
  password?: boolean;
  expand?: boolean;
  placeholder?: string | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  required?: boolean;
  focused?: boolean;
  error?: string;
}

export const CustomInput = ({
  label,
  password,
  placeholder,
  error,
  value,
  focused,
  onChange,
  expand,
  text,
  icon,
}: InputProps) => {
  const inputId = `custom-input-${label ?? 'default'}`;

  return (
    <InputContainer expand={expand}>
      {!!label && <Label htmlFor={inputId}>{text}</Label>}
      <RelativeContainer>
        <StyledInput
          type={password ? 'password' : 'text'}
          required
          id={inputId}
          {...(!!placeholder && { placeholder })}
          value={value}
          placeholder={label}
          onChange={onChange}
          focused={focused}
          error={error}
          icon={icon}
        />
        {!!icon && (
          <>
            <FontAwesomeIcon icon={icon} className="iconInput" />
          </>
        )}
      </RelativeContainer>
    </InputContainer>
  );
};
