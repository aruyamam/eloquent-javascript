const path = require('path');

module.exports = {
  mode: 'development',

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', { 'modules': false }]
              ]
            }
          }
        ],
        exclude: /node_modules/,
      },
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    watchContentBase: true
  }
};
