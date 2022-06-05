import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Moon, Sun } from '../../../../public/icons/SwitchIcons';

import { IComponent } from '../../types';

interface ISwitcher extends IComponent {
    onChange: () => void
}

export default ({ onChange }:ISwitcher) => {
  const theme = useContext(ThemeContext);

  return (
    <Switch
      onChange={onChange}
      checked={theme.title === 'dark'}
      onColor={theme.secondary}
      offColor={theme.secondary}
      checkedIcon={<Sun />}
      uncheckedIcon={<Moon />}
    />
  );
};
