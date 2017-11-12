# react-enhanced-route
[![npm version](https://badge.fury.io/js/react-enhanced-route.svg)](https://badge.fury.io/js/react-enhanced-route) [![CircleCI branch](https://img.shields.io/circleci/project/github/bombellos/react-enhanced-route/master.svg)]() [![npm](https://img.shields.io/npm/dm/react-enhanced-route.svg)](https://www.npmjs.com/package/react-enhanced-route) [![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/bombellos/react-enhanced-route/blob/master/LICENSE)

`react-enhanced-route` allows you to create react routes with custom layouts and routes which require authentication.

## Getting started

Install and add package as dependency by running one of below commands.

Using npm:

```bash
npm install react-enhanced-route
```

Using yarn:

```bash
yarn add react-enhanced-route
```

Import package and follow the examples below:

```
import {EnhancedRoute as Route} from 'react-enhanced-route'
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