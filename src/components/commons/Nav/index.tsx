import React from 'react';

import Button from '../Button';

import { NavWrapper, LinkList, LinkItem } from './Nav.styled';

const navItems = [
  {
    label: 'Início',
    link: '/',
  },
  {
    label: 'Blog',
    link: '/',
  },
];

export default () => (
  <NavWrapper>
    <LinkList>
      {navItems.map((item) => (
        <LinkItem key={item.label}>
          <Button ghost href={item.link}>{item.label}</Button>
        </LinkItem>
      ))}
    </LinkList>
  </NavWrapper>
);
