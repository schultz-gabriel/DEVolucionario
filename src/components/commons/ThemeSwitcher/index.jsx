import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import { Moon, Sun } from './icons/SwitchIcons';

export default function ThemeSwitcher({ toggleTheme }) {
  const theme = useContext(ThemeContext);

  return (
    <Switch
      onChange={toggleTheme}
      checked={theme.title === 'dark'}
      checkedIcon={<Sun />}
      uncheckedIcon={<Moon />}
      onColor={theme.secondary.main.color}
      offColor={theme.secondary.main.color}
    />
  );
}

ThemeSwitcher.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
