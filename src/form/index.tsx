import React, { useState } from 'react';
import { CustomInput } from '../components/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Body2 } from '../components/typography/body2/style';
import { FormContainer, IconForm } from './style';
import { Label } from '../components/typography/label';

export interface FormProps {
  icon?: IconDefinition;
  error?: string;
  label?: string;
  value?: string;
  expand?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const StyledForm = ({ value, error, icon, label, onChange }: FormProps) => {
  const [focused, setFocused] = useState(false);

  const handleInputFocus = () => {
    setFocused(true);
  };

  const handleInputBlur = () => {
    setFocused(false);
  };

  return (
    <FormContainer>
      {label && <Label error={!!error}>{label}</Label>}
      <CustomInput
        onChange={onChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        required
        focused={focused}
        error={error}
        value={value}
      />
      {!!error && (
        <Body2 color="errorDark">
          <IconForm>{icon && <FontAwesomeIcon icon={faExclamationTriangle} size="lg" />}</IconForm>
          {error}
        </Body2>
      )}
    </FormContainer>
  );
};
