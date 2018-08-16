import React from 'react';
import { ThemeProvider as CssThemeProvider } from '@friendsofreactjs/react-css-themr';
import { createEmotionContextTheme } from './createEmotionContextTheme';

export const ThemeProvider = ({ theme, ...rest }) => (
  <CssThemeProvider theme={createEmotionContextTheme(theme)} {...rest} />
);
