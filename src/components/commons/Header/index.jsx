import React from 'react';
import MenuHamburger from 'react-hamburger-menu';
import PropTypes from 'prop-types';
import HeaderWrapper from './style/HeaderWrapper';
import Logo from '../../../theme/Logo';
import ThemeSwitcher from '../ThemeSwitcher';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';

export default function Header({
  children, toggleTheme, hamburger, open,
}) {
  return (
    <HeaderWrapper>
      <Grid.Container>
        <Grid.Row
          marginTop={{ xs: '32px', md: '120px' }}
          flex="1"
        >
          <Grid.Col
            value={{ xs: 12, md: 10 }}
            offset={{ md: 1 }}
            flex={1}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Logo />
              <div className="nav_md">
                {children}
              </div>
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
            </Box>
          </Grid.Col>
          <div className="nav_sm">
            <Grid.Col
              value={{ xs: 12 }}
              offset={{ xs: 0 }}
              flex={1}
            >
              {children}
            </Grid.Col>
          </div>
        </Grid.Row>
      </Grid.Container>
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
