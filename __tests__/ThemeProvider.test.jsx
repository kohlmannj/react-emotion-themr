import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '../src/ThemeProvider';

describe('ThemeProvider', () => {
  it('renders', () => {
    const wrapper = shallow(
      <ThemeProvider>
        <div />
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
