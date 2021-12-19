import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.a`
  display:flex;
  background-color: rgba(0,0,0,0.2);
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 5px 1rem;
  img{
    width:190px;
  }
`;

export default function Logo() {
  return (
    <LogoWrapper href="/">
      <img src="/images/logo.png" alt="logo devolucionários" />
    </LogoWrapper>
  );
}
