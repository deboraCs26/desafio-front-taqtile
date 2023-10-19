import React, { useState } from 'react';
import { CustomInput } from '../input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Body2 } from '../typography/body2/style';
import { ErrorForm, FormContainer, IconForm } from './style';
import { Label } from '../typography/label';

export interface FormProps {
  icon?: IconDefinition;
  body?: string;
  label?: string;
  error?: boolean;
  minLength?: number;
  password?: boolean;
  value?: string;
  expand?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const StyledForm = ({ error, value, body, icon, label, onChange }: FormProps) => {
  const [focused, setFocused] = useState(false);

  const handleInputFocus = () => {
    setFocused(true);
  };

  const handleInputBlur = () => {
    setFocused(false);
  };

  return (
    <FormContainer>
      {label && <Label error={error}>{label}</Label>}
      <CustomInput
        onChange={onChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        required={true}
        focused={focused}
        error={error}
        value={value}
      />
      {error && (
        <ErrorForm>
          <Body2 color="errorDark">
            <IconForm>{icon && <FontAwesomeIcon icon={faExclamationTriangle} size="lg" />}</IconForm>
            {body}
          </Body2>
        </ErrorForm>
      )}
    </FormContainer>
  );
};
