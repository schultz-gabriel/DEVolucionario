import React, { useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import NextNprogress from 'nextjs-progressbar';

import { light, dark } from '../src/theme/themes';
import GlobalStyle from '../src/theme/global';

const App = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState(dark);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/icons/s.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet" />

      </Head>
      <ThemeProvider theme={theme}>
        <NextNprogress
          color="#fff"
          options={{ showSpinner: false }}
        />
        <GlobalStyle />
        <Component toggleTheme={toggleTheme} theme={theme} {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
