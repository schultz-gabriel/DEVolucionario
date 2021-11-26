import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  display:flex;
  img{
    width:60px;
  }
`;

export default function Logo() {
  return (
    <LogoWrapper>
      <img src="/images/logo.svg" alt="" />
    </LogoWrapper>
  );
}
