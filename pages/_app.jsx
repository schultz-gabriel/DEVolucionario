/* eslint-disable react/prop-types */
import Head from 'next/head';
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
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={colorTheme}>
        <Component toggleTheme={toggleTheme} {...pageProps} />
      </ThemeProvider>
    </>
  );
}
