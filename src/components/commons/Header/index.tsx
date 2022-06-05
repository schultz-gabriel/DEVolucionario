import React from 'react';

import HeaderWrapper from './Header.styled';

import { IComponent } from '../../types';

export default ({ children }:IComponent) => (
  <HeaderWrapper>
    {children}
  </HeaderWrapper>
);
