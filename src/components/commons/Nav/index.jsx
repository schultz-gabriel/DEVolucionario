import React from 'react';
import PropTypes from 'prop-types';
import NavWrapper from './style/NavWrapper';
import Button from '../Button';

const links = [
  {
    name: 'início',
    link: '/',
    icon: '/images/icons/home.png',
  },
  {
    name: 'materiais',
    link: '/materiais',
    icon: '/images/icons/open-book.png',
  },
  {
    name: 'sobre nós',
    link: '/sobre',
    icon: '/images/icons/pen.png',
  },
];

export default function Nav({ open }) {
  return (
    <NavWrapper open={open}>
      <ul>
        {links.map((item) => (
          <li key={item.name}>
            <Button href={item.link} className="link">
              <img src={item.icon} alt="" />
              {item.name}
            </Button>
          </li>
        ))}
      </ul>
    </NavWrapper>
  );
}

Nav.propTypes = {
  open: PropTypes.bool.isRequired,
};
