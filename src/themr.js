import { themr as cssThemr } from '@friendsofreactjs/react-css-themr';
import { createEmotionTheme } from './createEmotionTheme';

export function themr(componentName, localTheme, options = {}) {
  return cssThemr(componentName, createEmotionTheme(localTheme), options);
}
