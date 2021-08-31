import React from 'react';
import PropTypes from 'prop-types';
import HeaderWrapper from './style/HeaderWrapper';
import Logo from '../../../theme/Logo';

export default function Header({ children }) {
  return (
    <HeaderWrapper>
      <Logo />
      {children}
    </HeaderWrapper>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
