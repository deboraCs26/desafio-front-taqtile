import React from 'react';
import { ContainerSelect, StyledSelect } from './style';
import { Label } from '../../typography/label';

export type SelectProps = {
  value: string;
  options: { text: string; value: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  expand?: boolean;
  label?: string;
};

export const Select = ({ options, value, placeholder, onChange, label }: SelectProps) => {
  const inputId = `custom-input-${label ?? 'default'}`;
  return (
    <ContainerSelect>
      <Label htmlFor={inputId}>{label}</Label>
      <StyledSelect options={options} value={value} onChange={onChange}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </StyledSelect>
    </ContainerSelect>
  );
};
