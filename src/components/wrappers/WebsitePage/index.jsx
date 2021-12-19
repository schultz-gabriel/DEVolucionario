/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../commons/Header';
import Nav from '../../commons/Nav';
import Footer from '../../commons/Footer';
import Box from '../../foundation/layout/Box';
import SEO from '../../commons/SEO';

export const WebsitePageContext = React.createContext({
  toggleModalCadastro: () => { },
});

export default function WebsitePageWrapper({
  children,
  seoProps,
  toggleTheme,
}) {
  const [isMenuOpen, setMenuState] = React.useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        teste: true,
        toggleMenu: () => {
          setMenuState(!isMenuOpen);
        },
      }}
    >
      <SEO
        {...seoProps}
      />
      <Header
        toggleTheme={toggleTheme}
        hamburger={() => setMenuState(!isMenuOpen)}
        open={isMenuOpen}
      >
        <Nav open={isMenuOpen} />
      </Header>
      <Box
        display="flex"
        height="100%"
      >
        {children}
      </Box>
      <Footer />
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
  toggleTheme: () => { },
};

WebsitePageWrapper.propTypes = {
  toggleTheme: PropTypes.func,
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
