import { extname, join } from 'path';
import { readdirSync } from 'fs';
import * as reactEmotionThemr from '../src';

const importNames = readdirSync(join(__dirname, '..', 'src'))
  .map(f => f.replace(extname(f), ''))
  .filter(f => f !== 'index');

describe('index', () => {
  it(`contains an export for each file in src (other than 'index')`, () => {
    importNames.forEach(importName => {
      expect(reactEmotionThemr).toHaveProperty(importName);
    });
  });

  it(`contains only as many exports are their are files in src (other than 'index')`, () => {
    expect(Object.keys(reactEmotionThemr).length).toEqual(importNames.length);
  });
});
