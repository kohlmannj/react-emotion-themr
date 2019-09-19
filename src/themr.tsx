import React, { ComponentType } from 'react';
import {
  themr as cssThemr,
  IThemrOptions,
  TMapThemrProps,
} from '@friendsofreactjs/react-css-themr';
import { createEmotionTheme } from './createEmotionTheme';
import { TReactEmotionThemrTheme } from './createEmotionTheme';

export function themr(
  identifier: string | number | symbol,
  defaultTheme?: TReactEmotionThemrTheme,
  options?: IThemrOptions
) {
  return function emotionThemr<P = {}>(
    component: ComponentType<P>
  ): ComponentType<P & { mapThemrProps?: TMapThemrProps<P>; theme?: TReactEmotionThemrTheme }> {
    // Decorate the ThemedComponent
    const CssThemed = cssThemr(identifier, createEmotionTheme(defaultTheme), options)(component);

    // Wrap CssThemed in another component which knows how to handle the `theme` prop
    const EmotionThemed = (
      props: P & { mapThemrProps?: TMapThemrProps<P>; theme?: TReactEmotionThemrTheme }
    ): JSX.Element => {
      return (
        // eslint-disable-next-line compat/compat
        <CssThemed {...Object.assign({}, props, { theme: createEmotionTheme(props.theme) })} />
      );
    };

    EmotionThemed.displayName = `EmotionThemed${component.displayName || 'Component'}`;

    return EmotionThemed;
  };
}
