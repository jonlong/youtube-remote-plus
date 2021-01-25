import NunjucksPlugin from '@amprew/rollup-plugin-nunjucks'
import manifest from './manifest.json'

export default [
  {
    input: './src/content/index.js',
    output: {
      file: './dist/content-bundle.js',
      format: 'es',
      name: 'content-bundle'
    }
  },

  {
    input: './src/background.js',
    output: {
      file: './dist/background-bundle.js',
      format: 'es',
      name: 'background-bundle'
    }
  },

  {
    input: './src/options/options.js',
    output: {
      file: './dist/options-bundle.js',
      format: 'es',
      name: 'options-bundle'
    },
    plugins: [
      NunjucksPlugin({
        input: './src/options/options.html',
        output: './dist/options.html',
        vars: {
          commands: manifest.commands,
          bundleName: 'options-bundle'
        }
      })
    ]
  }
]
