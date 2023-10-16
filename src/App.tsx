import React, { useState } from 'react';
import { Heading1 } from './typography/h1/style';
import { Heading2 } from './typography/h2/style';
import { Heading3 } from './typography/h3/style';
import { Heading4 } from './typography/h4/style';
import { Body1 } from './typography/body1/style';
import { Body2 } from './typography/body2/style';
import { Price } from './typography/price/style';
import { Button } from './button/button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { LinkButtonComponent } from './button/link-button/style-link-button';
import { CustomInput } from './input';
import { Select } from './input/select';
import { Separator } from './separator/separator';

export function App() {
  const handleClick = () => {
    alert('O botão foi clicado!');
  };
  const estados = [
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

  const [estadoSelecionado, setEstadoSelecionado] = useState<string>('');

  const handleEstadoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEstadoSelecionado(e.target.value);
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
          value={estadoSelecionado}
          options={estados}
          onChange={handleEstadoChange}
          placeholder="Selecione"
          label="UF"
        />
      </div>
    </div>
  );
}
