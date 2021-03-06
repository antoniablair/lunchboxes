var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './RecipeApp/main.js',
  output: { path: __dirname, filename: './RecipeApp/bundle.js' },
  module: {
    loaders: [
      { test: /\.css$/, loader: "styles!css" },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }, 
      }
    ]
  },
    resolve: {
    extensions: ['', '.js', '.jsx']
  }
};