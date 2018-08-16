import { css } from 'emotion';

export function createEmotionTheme(classNamesObj) {
  if (typeof classNamesObj !== 'object' || classNamesObj === null) {
    return classNamesObj;
  }

  return Object.keys(classNamesObj).reduce((emotionTheme, className) => {
    const value = classNamesObj[className];
    const typeofValueIsNonNullObject = typeof value === 'object' && value !== null;

    // Only add the className if `value` is a non-null object or a string
    if (typeofValueIsNonNullObject || typeof value === 'string') {
      return {
        ...emotionTheme,
        [className]: typeofValueIsNonNullObject ? css(value, `label:${className};`) : value,
      };
    }

    return emotionTheme;
  }, {});
}
