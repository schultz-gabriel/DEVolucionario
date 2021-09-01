import React from 'react';
import PropTypes from 'prop-types';
import NavWrapper from './style/NavWrapper';
import Button from '../Button';

const links = [
  {
    name: 'início',
    link: '/',
  },
  {
    name: 'videos',
    link: '/videos',
  },
  {
    name: 'sobre nós',
    link: '/about',
  },
];

export default function Nav({ open }) {
  return (
    <NavWrapper open={open}>
      {links.map((item) => (
        <Button key={item.name} href={item.link}>
          {item.name}
        </Button>
      ))}
    </NavWrapper>
  );
}

Nav.propTypes = {
  open: PropTypes.bool.isRequired,
};
