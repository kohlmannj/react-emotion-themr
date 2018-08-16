# @kohlmannj/react-emotion-themr

A decorated version of [@friendsofreactjs/react-css-themr](https://github.com/FriendsOfReactJS/react-css-themr) that renders object-type CSS-in-JS styles using [emotion](https://emotion.sh).

| testing | coverage |
| ------- | ---------|
| [![Build Status](https://travis-ci.org/kohlmannj/react-emotion-themr.svg?branch=master)](https://travis-ci.org/kohlmannj/react-emotion-themr) | [![Coverage Status](https://coveralls.io/repos/github/kohlmannj/react-emotion-themr/badge.svg?branch=master)](https://coveralls.io/github/kohlmannj/react-emotion-themr?branch=master) |

## What does it do?

This package allows you to theme a React component by:

1. Decorating the component with this package's `themr()` [Higher-Order Component](https://reactjs.org/docs/higher-order-components.html)
2. Passing the decorated component a `theme` prop containing object-type CSS property-value pairs, in addition to CSS modules (i.e. an object of strings)
3. Using this package's `ThemeProvider` component to pass [context themes](https://github.com/FriendsOfReactJS/react-css-themr#context-theming) to child components

(Don't worry, there are [usage examples](#usage-examples) below!)

Beyond that, our `themr()` and `ThemeProvider` have the same API as the originals from [@friendsofreactjs/react-css-themr](https://github.com/FriendsOfReactJS/react-css-themr), so please read that project's documentation as well!

## Installation

@kohlmannj/react-emotion-themr has the following peerDependencies:

- [@friendsofreactjs/react-css-themr](https://npmjs.com/package/@friendsofreactjs/react-css-themr)
- [emotion v9.x](https://www.npmjs.com/package/emotion)
- [react v16.x](https://www.npmjs.com/package/react)

To install all dependencies you'll need, run either this `npm` command:

```bash
$ npm install --save @kohlmannj/react-emotion-themr @friendsofreactjs/react-css-themr emotion react
```

…or this `yarn` command:

```bash
$ yarn add @kohlmannj/react-emotion-themr @friendsofreactjs/react-css-themr emotion react
```

## Usage Examples

Let's import the `themr()` Higher-Order Component and use it to enhance a base `Button` component (this code is almost identical to [@friendsofreactjs/react-css-themr's first example](https://github.com/FriendsOfReactJS/react-css-themr#how-does-it-work))

```jsx
// Button.jsx
import React, { Component } from 'react';
import { themr } from '@kohlmannj/react-emotion-themr'; // note the package name!

@themr('MyThemedButton')
class Button extends Component {
  render() {
    const { theme, icon, children } = this.props;
    return (
      <button className={theme.button}>
        {icon ? <i className={theme.icon}>{icon}</i> : null}
        <span className={theme.content}>{children}</span>
      </button>
    );
  }
}

export default Button;
```

**Here's where things get interesting:** we can now pass our `Button` component a `theme` prop whose values are object of CSS property-value pairs. @kohlmannj/react-emotion-themr uses **emotion** to render these CSS objects to classNames:

```jsx
import React from 'react';
import Button from './Button';

// These CSS properties will be rendered to classNames by emotion behind the scenes!
const successTheme = {
  button: {
    backgroundColor: 'transparent',
    border: '2px solid rebeccapurple',
    borderRadius: '8px',
  },
  icon: {
    float: 'left',
    width: '48px';
    height: '48px',
  },
  content: {
    color: 'rebeccapurple',
    fontSize: '20px',
    fontWeight: 'bold',
  },
};

export default props => (
  <div {...props}>
    <p>Do you like it?</p>
    <Button theme={successTheme}>Yeah!</Button>
  </div>
);
```
