import React from 'react';
import MenuHamburger from 'react-hamburger-menu';
import PropTypes from 'prop-types';
import HeaderWrapper from './style/HeaderWrapper';
import Logo from '../../../theme/Logo';
import ThemeSwitcher from '../ThemeSwitcher';

export default function Header({
  children, toggleTheme, hamburger, open,
}) {
  return (
    <HeaderWrapper>
      <Logo />
      <ThemeSwitcher toggleTheme={toggleTheme} />
      <MenuHamburger
        isOpen={open}
        menuClicked={hamburger}
        width={30}
        height={20}
        strokeWidth={1}
        rotate={0}
        color="#333"
        borderRadius={0}
        animationDuration={0.2}
      />
      {children}
    </HeaderWrapper>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  toggleTheme: PropTypes.func,
  hamburger: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  children: '',
  toggleTheme: () => { },
};
