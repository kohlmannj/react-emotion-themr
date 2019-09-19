import { TReactCSSThemrTheme } from '@friendsofreactjs/react-css-themr';
import { CSSObject } from 'create-emotion';
import { css } from 'emotion';

export type TReactEmotionThemrTheme = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: CSSObject | any;
};

export type RenderedEmotionTheme<T, V = TReactEmotionThemrTheme> = T extends V
  ? TReactCSSThemrTheme
  : T;

export function createEmotionTheme<T>(classNamesObj: T): RenderedEmotionTheme<T> {
  if (
    typeof classNamesObj === 'object' &&
    typeof classNamesObj !== 'undefined' &&
    classNamesObj !== null
  ) {
    return Object.keys(classNamesObj).reduce(
      (emotionTheme, className) => {
        const value = (classNamesObj as TReactEmotionThemrTheme)[className];

        if ((typeof value === 'object' && value !== null) || typeof value === 'string') {
          return {
            ...emotionTheme,
            [className]:
              typeof value === 'object' && value !== null
                ? css(value, `label:${className};`)
                : value,
          } as TReactCSSThemrTheme;
        }

        return emotionTheme;
      },
      {} as TReactCSSThemrTheme
      /** @see https://github.com/microsoft/TypeScript/issues/22735#issuecomment-376960435 */
    ) as T extends TReactEmotionThemrTheme ? TReactCSSThemrTheme : never;
  }

  return classNamesObj as T extends TReactEmotionThemrTheme ? never : T;
}
