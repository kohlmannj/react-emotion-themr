import { createEmotionTheme } from './createEmotionTheme';

export function createEmotionContextTheme(contextThemeObj) {
  if (typeof contextThemeObj !== 'object' || contextThemeObj === null) {
    return contextThemeObj;
  }

  return Object.keys(contextThemeObj).reduce(
    (emotionContextTheme, componentName) => ({
      ...emotionContextTheme,
      [componentName]: createEmotionTheme(contextThemeObj[componentName]),
    }),
    {}
  );
}
