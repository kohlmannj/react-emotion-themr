import React, { FunctionComponent } from 'react';
import { ThemeProvider as CssThemeProvider } from '@friendsofreactjs/react-css-themr';
import {
  createEmotionContextTheme,
  TReactEmotionThemrContextTheme,
} from './createEmotionContextTheme';

export interface ThemeProviderProps {
  innerRef?: Function;
  theme: TReactEmotionThemrContextTheme;
}

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
  children,
  innerRef,
  theme,
}) => (
  <CssThemeProvider theme={createEmotionContextTheme(theme)} innerRef={innerRef}>
    {children}
  </CssThemeProvider>
);
