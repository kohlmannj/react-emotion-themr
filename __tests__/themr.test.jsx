import React from 'react';
import { shallow } from 'enzyme';
import { themr } from '../src/themr';

const BaseComponent = ({ className, theme, ...rest }) => (
  <div className={[className, theme.root].join(' ')} {...rest} />
);

describe('themr', () => {
  it('creates a decorated React component', () => {
    const MyThemedComponent = themr('MyThemedComponent')(BaseComponent);
    const wrapper = shallow(<MyThemedComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
