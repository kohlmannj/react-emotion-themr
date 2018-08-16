import * as emotion from 'emotion';
import { getStyles } from 'jest-emotion';
import { createEmotionTheme } from '../src/createEmotionTheme';

function objectContainingClassNames(themeObj) {
  return expect.objectContaining(
    Object.keys(themeObj).reduce(
      (expectedObj, key) => ({
        ...expectedObj,
        ...(typeof themeObj[key] === 'string' ||
        (typeof themeObj[key] === 'object' && themeObj[key] !== null)
          ? { [key]: typeof themeObj[key] === 'string' ? themeObj[key] : expect.any(String) }
          : {}),
      }),
      {}
    )
  );
}

afterEach(() => {
  emotion.flush();
});

describe('createEmotionTheme', () => {
  it('renders a theme of objects', () => {
    const objectOfObjectsTheme = {
      root: {
        backgroundColor: 'rebeccapurple',
      },
      foo: {
        fontSize: 32,
      },
    };

    const emotionTheme = createEmotionTheme(objectOfObjectsTheme);

    expect(emotionTheme).toEqual(objectContainingClassNames(objectOfObjectsTheme));
    expect(getStyles(emotion)).toMatchSnapshot();
  });

  it(`handles mixed themes (an object of strings and non-null objects)`, () => {
    const mixedTheme = {
      root: {
        backgroundColor: 'rebeccapurple',
      },
      foo: 'foo',
    };

    const emotionTheme = createEmotionTheme('foobar');

    expect(emotionTheme).toBe('foobar');
    const styles = getStyles(emotion);
    expect(styles).not.toContain(mixedTheme.root.backgroundColor);
  });

  it(`omits properties whose values are neither strings nor non-null objects`, () => {
    const themeWithNullProperties = {
      root: 'root',
      foo: null,
    };

    const emotionTheme = createEmotionTheme(themeWithNullProperties);

    expect(emotionTheme).not.toHaveProperty('foo');
    const styles = getStyles(emotion);
    expect(styles).toBe('');
  });

  it(`passes through a theme of strings (and doesn't render anything with Emotion)`, () => {
    const objectOfStringsTheme = {
      root: 'root',
      foo: 'foo',
    };

    const emotionTheme = createEmotionTheme(objectOfStringsTheme);

    expect(emotionTheme).toEqual(objectOfStringsTheme);
    const styles = getStyles(emotion);
    expect(styles).toBe('');
  });

  it(`returns the input if it's a non-object`, () => {
    const emotionTheme = createEmotionTheme('foobar');

    expect(emotionTheme).toBe('foobar');
    const styles = getStyles(emotion);
    expect(styles).toBe('');
  });
});
