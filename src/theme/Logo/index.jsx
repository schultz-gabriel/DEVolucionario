import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  display:flex;
  background-color: #204829;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 5px;
  img{
    width:190px;
  }
`;

export default function Logo() {
  return (
    <LogoWrapper>
      <img src="/images/logo.png" alt="" />
    </LogoWrapper>
  );
}
