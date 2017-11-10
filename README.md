# react-enhanced-route
[![npm version](https://badge.fury.io/js/react-enhanced-route.svg)](https://badge.fury.io/js/react-enhanced-route) [![npm](https://img.shields.io/npm/dw/localeval.svg)](https://www.npmjs.com/package/react-enhanced-route) [![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/bombellos/react-enhanced-route/blob/master/LICENSE)

Using `react-enhanced-route` we can create react routes with custom layouts and prevent accessing routes based on authentication.

## Getting started

Using npm:

```bash
npm install react-enhanced-route
```

Using yarn:

```bash
yarn add react-enhanced-route
```

## Examples

Create route with custom layout
```js
<Route path="/home" component={HomePage} layout={MainLayout} />
```

Create protected route
```js
<Route path="/admin" auth={isAuthorized} component={AdminPage} />
```

Create protected route with redirection and layout
```js
<Route path="/admin" auth={isAuthorized} redirect={'/login'} component={AdminPage} layout={AdminLayout} />
```

For live examples click below:

[![Edit react-enhanced-route example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/62nxxq16rn)

## License
MIT