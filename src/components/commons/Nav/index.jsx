import React from 'react';
import PropTypes from 'prop-types';
import NavWrapper from './style/NavWrapper';
import Button from '../Button';
import Text from '../../foundation/text';

const links = [
  {
    title: 'início',
    link: '/',
  },
  {
    title: 'blog',
    link: '/blog',
  },
  {
    title: 'sobre',
    link: '/sobre',
  },
];

export default function Nav({ open }) {
  return (
    <NavWrapper open={open}>
      <ul>
        {links.map((item) => (
          <li key={item.title}>
            <Button href={item.link} className="link" width="80%">
              <Text
                variant="paragraph2"
                tag="span"
                color="secondary.main"
                textAlign={{
                  xs: 'center',
                }}
                margin="0"
              >
                {item.title}
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
