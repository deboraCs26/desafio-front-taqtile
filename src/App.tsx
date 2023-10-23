import React, { useState } from 'react';
import { Heading1 } from './components/typography/h1/style';
import { Heading2 } from './components/typography/h2/style';
import { Heading3 } from './components/typography/h3/style';
import { Heading4 } from './components/typography/h4/style';
import { Body1 } from './components/typography/body1/style';
import { Body2 } from './components/typography/body2/style';
import { Price } from './components/typography/price/style';
import { Button } from './components/button/button';
import { faPlus, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { LinkButtonComponent } from './components/button/link-button/style-link-button';
import { CustomInput } from './components/input';
import { Select } from './components/input/select';
import { StyledForm } from './components/form';
import { Separator } from './components/separator/separator';

export function App() {
  const handleClick = () => {
    alert('O botão foi clicado!');
  };
  const states = [
    { text: 'Acre', value: 'AC' },
    { text: 'Alagoas', value: 'AL' },
    { text: 'Amapá', value: 'AP' },
    { text: 'Amazonas', value: 'AM' },
    { text: 'Bahia', value: 'BA' },
    { text: 'Ceará', value: 'CE' },
    { text: 'Distrito Federal', value: 'DF' },
    { text: 'Espírito Santo', value: 'ES' },
    { text: 'Goiás', value: 'GO' },
    { text: 'Maranhão', value: 'MA' },
    { text: 'Mato Grosso', value: 'MT' },
    { text: 'Mato Grosso do Sul', value: 'MS' },
    { text: 'Minas Gerais', value: 'MG' },
    { text: 'Pará', value: 'PA' },
    { text: 'Paraíba', value: 'PB' },
    { text: 'Paraná', value: 'PR' },
    { text: 'Pernambuco', value: 'PE' },
    { text: 'Piauí', value: 'PI' },
    { text: 'Rio de Janeiro', value: 'RJ' },
    { text: 'Rio Grande do Norte', value: 'RN' },
    { text: 'Rio Grande do Sul', value: 'RS' },
    { text: 'Rondônia', value: 'RO' },
    { text: 'Roraima', value: 'RR' },
    { text: 'Santa Catarina', value: 'SC' },
    { text: 'São Paulo', value: 'SP' },
    { text: 'Sergipe', value: 'SE' },
    { text: 'Tocantins', value: 'TO' },
  ];

  const [stateSelected, setStateSelected] = useState<string>('');
  const [stateError, setStateError] = useState('');

  const validateSelect = () => {
    setStateError('');
    if (!stateSelected.trim()) {
      setStateError('Campo obrigatório, selecione um estado');
    } else if (stateSelected.length !== 2) {
      setStateError('Estado inválido. Selecione um estado válido.');
    }
  };

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const validateFields = () => {
    setNameError('');
    if (!name.trim()) {
      setNameError('Campo obrigatório.');
    } else if (name.length < 2) {
      setNameError('Nome inválido.');
    }
  };

  const handleSubmit = () => {
    validateFields();
    validateSelect();
  };
  return (
    <div>
      <Heading1>Heading 1</Heading1>
      <Heading2>Heading 2</Heading2>
      <Heading3>Heading 3</Heading3>
      <Heading4 color="gray">Heading 4</Heading4>
      <Heading4 color="grayXDark">Heading 4</Heading4>
      <Heading4 color="grayDark">Heading 4</Heading4>
      <Body1 color="XDark" weight="bold">
        Body1
      </Body1>
      <Body1 color="gray" weight="regular">
        Body1
      </Body1>
      <Body1 color="success">Body1</Body1>
      <Body2 color="errorDark" height="large" size="large" weight="regular">
        Body2
      </Body2>
      <Body2 color="ctaDark" weight="semiBold" height="medium" size="small">
        Body2
      </Body2>
      <Body2 color="gray">Body2</Body2>
      <Body2 color="grayDark">Body2</Body2>
      <Price color="grayLight" weight="semiBold" size="XLarge" height="XLarge">
        Price
      </Price>
      <Price color="primary" weight="bold" size="medium" height="small">
        Price
      </Price>
      <Price weight="regular">Price</Price>
      <Heading1>Styleguide</Heading1>
      <Heading2>Botões</Heading2>
      <Button variant="primary" icon={faPlus} onClick={handleClick}>
        Adicionar
      </Button>
      <Button variant="cta">Fechar pedido</Button>
      <Button variant="secondary">Voltar para o perfil</Button>
      <LinkButtonComponent color="ctaDark">Continuar comprando</LinkButtonComponent>
      <LinkButtonComponent color="stateError">Remover</LinkButtonComponent>
      <div>
        <CustomInput label="CRO" password={true} />
      </div>
      <Separator size="XLarge" />
      <div>
        <Select
          value={stateSelected}
          options={states}
          onChange={(e) => setStateSelected(e.target.value)}
          placeholder="Selecione"
          label="UF"
          error={stateError}
          icon={faExclamationTriangle}
        />
      </div>
      <div>
        <Heading1>Meu formulario</Heading1>
        <StyledForm
          label="Nome"
          icon={faExclamationTriangle}
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={nameError}
        />

        <Button variant="primary" onClick={handleSubmit}>
          Enviar
        </Button>
      </div>
    </div>
  );
}
