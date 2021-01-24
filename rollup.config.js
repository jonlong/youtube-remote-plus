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
  }
]
