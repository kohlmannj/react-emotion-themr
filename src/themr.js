import React from 'react';
import { themr as cssThemr } from '@friendsofreactjs/react-css-themr';
import { createEmotionTheme } from './createEmotionTheme';

export function themr(componentName, localTheme, options = {}) {
  return BaseComponent => {
    // Decorate the BaseComponent
    const CssThemed = cssThemr(componentName, createEmotionTheme(localTheme), options)(
      BaseComponent
    );

    // Wrap CssThemed in another component which knows how to handle the `theme` prop
    const EmotionThemed = ({ theme, ...rest }) => (
      <CssThemed theme={createEmotionTheme(theme)} {...rest} />
    );

    return EmotionThemed;
  };
}
