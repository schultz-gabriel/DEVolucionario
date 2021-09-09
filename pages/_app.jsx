/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import { dark, light } from '../src/theme/colorThemes';
import GlobalStyle from '../src/theme/GlobalStyle';

export default function App({ Component, pageProps }) {
  const [colorTheme, setColorTheme] = useState(dark);
  const toggleTheme = () => {
    setColorTheme(colorTheme.title === 'light' ? dark : light);
  };

  const allThemes = {
    ...theme,
    ...colorTheme,
  };

  return (
    <>
      <ThemeProvider theme={allThemes}>
        <GlobalStyle />
        <Component toggleTheme={toggleTheme} {...pageProps} />
      </ThemeProvider>
    </>
  );
}
