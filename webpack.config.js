/* eslint-disable */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

const hotModuleReplacement = new webpack.HotModuleReplacementPlugin();

const namedModules = new webpack.NamedModulesPlugin();

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: true,
});

const copyHTMLTemplate = new HtmlWebpackPlugin({
  template: "template/index.html"
});

const config = {
  entry: {
    "app": [
      "react-hot-loader/patch",
      "./src/index.js"
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  devtool: "eval",
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        use: [
          { 
            loader: "react-hot-loader/webpack" 
          },
          {
            loader: "babel-loader",
            options: {
              presets: [
                "env",
                "react"
              ],
              plugins: [
                require('babel-plugin-transform-object-rest-spread'), 
                require('babel-plugin-transform-class-properties'),
              ],
            }
          },
        ],
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, "node_modules"),
        ]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 5000 }
          },
          "image-webpack-loader"
        ]
      }
    ]
  },
  plugins: [
    copyHTMLTemplate,
    extractSass,
    hotModuleReplacement,
    namedModules,
  ]
};

module.exports = config;