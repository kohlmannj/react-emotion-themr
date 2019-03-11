import React from 'react';
import { themr as cssThemr } from '@friendsofreactjs/react-css-themr';
import { createEmotionTheme } from './createEmotionTheme';

/**
 * Maps props and theme to an object that will be used to pass down props to the
 * decorated component. Based on `defaultMapThemrProps()` from @friendsofreactjs/react-css-themr:
 * @see https://github.com/FriendsOfReactJS/react-css-themr/blob/3.3.0/src/components/themr.js#L312-L334
 *
 * @param {Object} ownProps - All props given to the decorated component
 * @param {Object} theme - Calculated then that should be passed down
 * @returns {Object} - Props that will be passed down to the decorated component
 */
function mapThemrPropsWithEmotion(ownProps, theme) {
  const {
    composeTheme, //eslint-disable-line no-unused-vars
    innerRef,
    themeNamespace, //eslint-disable-line no-unused-vars
    mapThemrProps, //eslint-disable-line no-unused-vars
    ...rest
  } = ownProps;

  return {
    ...rest,
    ref: innerRef,
    theme: createEmotionTheme(theme),
  };
}

export function themr(componentName, localTheme, { mapThemrProps, ...restOptions } = {}) {
  return ThemedComponent =>
    cssThemr(componentName, createEmotionTheme(localTheme), {
      ...restOptions,
      mapThemrProps: mapThemrProps
        ? // For a custom `mapThemrProps()` function, make sure we transform `theme` first
          (ownProps, theme) => mapThemrProps(ownProps, createEmotionTheme(theme))
        : // By default, transform `theme` into `createEmotionTheme(theme)` (see above)
          mapThemrPropsWithEmotion,
    })(ThemedComponent);
}
