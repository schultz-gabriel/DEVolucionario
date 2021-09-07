/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '../src/theme/colorThemes';
import theme from '../src/theme';

export default function App({ Component, pageProps }) {
  const [colorTheme, setColorTheme] = useState(dark);
  const toggleTheme = () => {
    setColorTheme(colorTheme.title === 'light' ? dark : light);
  };

  const allThemes = {
    ...colorTheme,
    ...theme,
  };

  return (
    <>
      <ThemeProvider theme={allThemes}>
        <Component toggleTheme={toggleTheme} {...pageProps} />
      </ThemeProvider>
    </>
  );
}
