import { themeable as cssThemeable } from '@friendsofreactjs/react-css-themr';
import { createEmotionTheme } from './createEmotionTheme';

/**
 * Merges passed themes by concatenating string keys and processing nested themes
 *
 * @param {...TReactCSSThemrTheme} themes - Themes
 * @returns {TReactCSSThemrTheme} - Resulting theme
 */
export function themeable(...themes) {
  return cssThemeable(...themes.map(createEmotionTheme));
}
