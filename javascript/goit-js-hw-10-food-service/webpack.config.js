const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract(
      //     {
      //       fallback: 'style-loader',
      //       use: ['css-loader']
      //     })
      // }
    ]
  },
  plugins: [ 
      // new ExtractTextPlugin(
      //   {filename: 'style.css'}
      // ),
      new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
}