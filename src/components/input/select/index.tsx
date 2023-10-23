import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ContainerSelect, IconSelect, StyledSelect } from './style';
import { Label } from '../../typography/label';
import { Body2 } from '../../typography/body2/style';

export type SelectProps = {
  icon?: IconDefinition;
  body?: string;
  value: string;
  options: { text: string; value: string }[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  expand?: boolean;
  label?: string;
  focused?: boolean;
  error?: boolean;
};

export const Select = ({ options, value, placeholder, label, error, icon, body, onChange }: SelectProps) => {
  const [focused, setFocused] = useState(false);
  const inputId = `custom-input-${label ?? 'default'}`;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e);
  };

  const handleSelectFocus = () => {
    setFocused(true);
  };

  const handleSelectBlur = () => {
    setFocused(false);
  };

  return (
    <ContainerSelect>
      <Label htmlFor={inputId}>{label}</Label>
      <StyledSelect
        value={value}
        options={options}
        focused={focused}
        error={error}
        onBlur={handleSelectBlur}
        onFocus={handleSelectFocus}
        onChange={handleChange}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </StyledSelect>
      {error && (
        <Body2 color="errorDark">
          <IconSelect>{icon && <FontAwesomeIcon icon={faExclamationTriangle} size="lg" />}</IconSelect>
          {body}
        </Body2>
      )}
    </ContainerSelect>
  );
};
