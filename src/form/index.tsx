import React, { useState } from 'react';
import { CustomInput } from '../input/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Body2 } from '../typography/body2';
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
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const StyledForm = ({ error, value, onChange, body, icon, label }: FormProps) => {
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
        onChange={(e) => onChange(e)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        required={true}
        isFocused={focused}
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
