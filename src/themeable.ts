import { themeable as cssThemeable, TReactCSSThemrTheme } from '@friendsofreactjs/react-css-themr';
import { createEmotionTheme, TReactEmotionThemrTheme } from './createEmotionTheme';

/**
 * Merges passed themes by concatenating string keys and processing nested themes
 *
 * @param themes - Themes
 * @returns {TReactCSSThemrTheme} - Resulting theme
 */
export function themeable(...themeObjects: TReactEmotionThemrTheme[]): TReactCSSThemrTheme {
  const themes = [];
  for (let i = 0; i < themeObjects.length; i++) {
    themes.push(createEmotionTheme(themeObjects[i]));
  }
  return cssThemeable.call(null, ...themes);
}
