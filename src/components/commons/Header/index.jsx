import React from 'react';
import PropTypes from 'prop-types';
import HeaderWrapper from './style/HeaderWrapper';
import Logo from '../../../theme/Logo';
import ThemeSwitcher from '../ThemeSwitcher';

export default function Header({ children, toggleTheme }) {
  return (
    <HeaderWrapper>
      <Logo />
      <ThemeSwitcher toggleTheme={toggleTheme} />
      {children}
    </HeaderWrapper>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  toggleTheme: PropTypes.func,
};

Header.defaultProps = {
  children: '',
  toggleTheme: () => { },
};
