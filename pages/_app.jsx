/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { parseCookies, setCookie } from 'nookies';
import theme from '../src/theme';
import { dark, light } from '../src/theme/colorThemes';
import GlobalStyle from '../src/theme/GlobalStyle';

export default function App({ Component, pageProps }) {
  const [colorTheme, setColorTheme] = useState(dark);

  const toggleTheme = (selectedTheme) => {
    setColorTheme(selectedTheme);
  };

  const getThemeCookie = () => {
    const cookies = parseCookies();
    const themeCookie = cookies.THEME_COOKIE;
    setColorTheme(themeCookie === 'dark' ? dark : light);
  };

  const setThemeCookie = (selectedTheme) => {
    const setCookieModule = setCookie;
    const DAY_IN_SECONDS = 86400;
    setCookieModule(null, 'THEME_COOKIE', selectedTheme, {
      maxAge: DAY_IN_SECONDS * 7,
    });
  };

  const handleToggleTheme = () => {
    toggleTheme(colorTheme.title === 'light' ? dark : light);
    setThemeCookie(colorTheme.title === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    getThemeCookie();
  }, []);

  const allThemes = {
    ...theme,
    ...colorTheme,
  };

  return (
    <ThemeProvider theme={allThemes}>
      <GlobalStyle />
      <Component toggleTheme={handleToggleTheme} {...pageProps} />
    </ThemeProvider>
  );
}
