import React from 'react';
import { StyledInput } from '.';

export const CustomInput = ({ label, value, onChange, onFocus, onBlur, password }) => {
  return (
    <StyledInput
      type={password ? 'password' : 'text'}
      placeholder={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onFocus={onFocus}
      onBlur={onBlur}
      required
    />
  );
};
