import * as emotion from 'emotion';
import { getStyles } from 'jest-emotion';
import { createEmotionContextTheme } from '../src/createEmotionContextTheme';

afterEach(() => {
  emotion.flush();
});

describe('createEmotionContextTheme', () => {
  it('creates a context theme', () => {
    const contextThemeObj = {
      ComponentA: {
        root: {
          backgroundColor: 'rebeccapurple',
        },
      },
      ComponentB: {
        root: {
          backgroundColor: 'slategray',
        },
      },
    };

    const contextTheme = createEmotionContextTheme(contextThemeObj);

    expect(contextTheme).toEqual(
      expect.objectContaining({
        ComponentA: expect.objectContaining({ root: expect.any(String) }),
        ComponentB: expect.objectContaining({ root: expect.any(String) }),
      })
    );

    const styles = getStyles(emotion);
    expect(styles).toContain(contextThemeObj.ComponentA.root.backgroundColor);
    expect(styles).toContain(contextThemeObj.ComponentB.root.backgroundColor);
  });
});
