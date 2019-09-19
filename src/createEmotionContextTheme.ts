import { TReactCSSThemrTheme } from '@friendsofreactjs/react-css-themr';
import {
  createEmotionTheme,
  TReactEmotionThemrTheme,
  RenderedEmotionTheme,
} from './createEmotionTheme';

export type TReactEmotionThemrContextTheme = {
  [key: string]: TReactEmotionThemrTheme;
};

export function createEmotionContextTheme<T>(
  contextThemeObj: T
): RenderedEmotionTheme<T, TReactEmotionThemrContextTheme> {
  if (
    typeof contextThemeObj === 'object' &&
    typeof contextThemeObj !== 'undefined' &&
    contextThemeObj !== null
  ) {
    return Object.keys(contextThemeObj).reduce(
      (emotionContextTheme, componentName) => ({
        ...emotionContextTheme,
        [componentName]: createEmotionTheme(
          (contextThemeObj as TReactEmotionThemrTheme)[componentName]
        ),
      }),
      {} as TReactCSSThemrTheme
    ) as T extends TReactEmotionThemrContextTheme ? TReactCSSThemrTheme : never;
  }

  return contextThemeObj as T extends TReactEmotionThemrContextTheme ? never : T;
}
