import React from 'react';
import PropTypes from 'prop-types';
import NavWrapper from './style/NavWrapper';
import Button from '../Button';
import Text from '../../foundation/text';

const links = [
  {
    name: 'início',
    link: '/',
    icon: '/images/icons/home.svg',
  },
  {
    name: 'blog',
    link: '/blog',
    icon: '/images/icons/pen.svg',
  },
  {
    name: 'estudo',
    link: '/estudo',
    icon: '/images/icons/estudo.svg',
  },
  {
    name: 'sobre nós',
    link: '/sobre',
    icon: '/images/icons/group.svg',
  },
];

export default function Nav({ open }) {
  return (
    <NavWrapper open={open}>
      <nav>
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
      </nav>
    </NavWrapper>
  );
}

Nav.propTypes = {
  open: PropTypes.bool.isRequired,
};
