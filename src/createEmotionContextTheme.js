export function createEmotionContextTheme(contextThemeObj) {
  if (typeof contextThemeObj !== 'object' || contextThemeObj === null) {
    return contextThemeObj;
  }

  return Object.keys(contextThemeObj).reduce(
    (emotionContextTheme, componentName) => ({
      ...emotionContextTheme,
      [componentName]: createEmotionCssModule(contextThemeObj[componentName]),
    }),
    {}
  );
}
