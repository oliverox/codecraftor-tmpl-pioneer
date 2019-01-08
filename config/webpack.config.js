var path = require('path');

module.exports = {
  entry: './main.js',
  externals: {
    'react': 'react',
    'react-dom': 'react-dom'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'main.js',
    library: 'codecraftor-template',
    libraryTarget: 'umd'
  }
};
