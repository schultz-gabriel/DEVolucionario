import React from 'react';

import Button from '../Button';
import BurgerIcon from '../../../../public/icons/burgerIcon';

interface IBurgerButton {
    onClick: () => void,
    color?: string,
}

export default ({ onClick, color }:IBurgerButton) => (
  <Button onClick={onClick} ghost>
    <BurgerIcon color={color} />
  </Button>
);
