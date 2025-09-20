import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { themeCreator } from './base';
import { StylesProvider } from '@mui/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import stylisRTLPlugin from 'stylis-plugin-rtl';
import { useTranslation } from 'react-i18next';

const cacheRtl = createCache({
  key: 'bloom-ui',
  prepend: true,
  // @ts-ignore
  stylisPlugins: [stylisRTLPlugin]
});

export const ThemeContext = React.createContext(
  (themeName: string): void => {}
);

const ThemeProviderWrapper: React.FC = (props) => {
  const curThemeName = 'ShadcnTheme';
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);
  const { i18n } = useTranslation();
  const rtl = i18n.dir() === 'rtl';
  console.log('themeName1', {themeName});

  const setThemeName = (themeName: string): void => {
    console.log('themeName', {themeName});
    localStorage.setItem('appTheme', 'ShadcnTheme');
    _setThemeName('ShadcnTheme');
  };

  useEffect(() => {
    if (rtl) document.documentElement.setAttribute('dir', 'rtl');
    else document.documentElement.removeAttribute('dir');
    console.log('themeName2', {rtl, themeName});

  }, [rtl]);

  const providers = (
    <ThemeContext.Provider value={setThemeName}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
  return (
    <StylesProvider injectFirst>
      {rtl ? (
        <CacheProvider value={cacheRtl}>{providers}</CacheProvider>
      ) : (
        providers
      )}
    </StylesProvider>
  );
};

export default ThemeProviderWrapper;
