/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '../src/theme/colorThemes';

export default function App({ Component, pageProps }) {
  const [colorTheme, setColorTheme] = useState(dark);
  const toggleTheme = () => {
    setColorTheme(colorTheme.title === 'light' ? dark : light);
  };

  return (
    <>
      <ThemeProvider theme={colorTheme}>
        <Component toggleTheme={toggleTheme} {...pageProps} />
      </ThemeProvider>
    </>
  );
}
