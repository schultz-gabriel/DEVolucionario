import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  display:flex;
  img{
    width:180px;
  }
`;

export default function Logo() {
  return (
    <LogoWrapper>
      <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-calculadora.svg" alt="" />
    </LogoWrapper>
  );
}
