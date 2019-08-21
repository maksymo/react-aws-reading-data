const path = require('path')

module.exports = {
  mode: 'production',
  entry: ['./src/server/index.ts'],
  resolve: {
    extensions: ['.mjs', '.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.(ts)?$/,
        use: {
          loader: 'awesome-typescript-loader',
          options: { configFileName: 'tsconfig.server.json' }
        },
        exclude: /node_modules/
      }
    ]
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist/server'),
    filename: 'index.js',
    libraryTarget: 'umd'
  }
}