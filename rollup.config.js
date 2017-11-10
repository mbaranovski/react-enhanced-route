import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json';

const config = {
  input: 'src/index.js',
  output: {
    file: pkg.browser,
    format: 'umd'
  },
  name: 'ReactEnhancedRoute',
  globals: {
    react: 'React',
    "react-router-dom": 'reactRouterDom',
    "prop-types": "PropTypes"
  },
  external: [
    'react',
    'react-router-dom',
    'prop-types'
  ],
  plugins: [
    babel({exclude: ['node_modules/**']}),
    resolve(),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};

export default config