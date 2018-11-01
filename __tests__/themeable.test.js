import * as emotion from 'emotion';
import { themeable } from '../src';

afterEach(() => {
  emotion.flush();
});

describe('themeable', () => {
  it(`merges emotion themes`, () => {
    const emotionTheme1 = {
      root: {
        backgroundColor: 'rebeccapurple',
      },
    };

    const emotionTheme2 = {
      root: {
        outline: 'rebeccapurple',
      },
    };

    const combinedTheme = themeable(emotionTheme1, emotionTheme2);

    expect(combinedTheme).toEqual(
      expect.objectContaining({
        root: expect.stringMatching(/\S+root\s\S+root/),
      })
    );
  });
});
