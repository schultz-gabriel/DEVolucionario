import React from 'react';
import PropTypes from 'prop-types';
import NavWrapper from './style/NavWrapper';
import Button from '../Button';
import Text from '../../foundation/text';

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
              <Text
                variant="paragraph1"
                tag="span"
                color="secondary.main"
                textAlign={{
                  xs: 'center',
                }}
                margin="0"
              >
                {item.name}
              </Text>
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
