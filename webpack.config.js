let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|htc)$/,
        use: [
          'file-loader'
        ]
      },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
        ]
       }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    favicon: './src/_assets/favicon.ico',
    template: './src/index.html',
    filename: 'index.html'
  })],
  devServer: {
    historyApiFallback: true
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: 'http://localhost:8080'
    })
  }
};
