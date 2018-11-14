const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname,'public', 'dist'),
    publicPath: '/'
  },
  module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel']
        },
      }]
    },
    devtool:'source-map',
    devServer: {
      contentBase: path.join(__dirname,'public'),
      historyApiFallback: true
    }
  };
