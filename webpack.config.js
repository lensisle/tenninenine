const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "[name].css",
  disable: process.env.NODE_ENV === "development"
});

const copyHTMLTemplate = new HtmlWebpackPlugin({
  template: "client/index.html"
});

const config = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ]
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
            use: [{ loader: "css-loader" }, { loader: "sass-loader" }],
            fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    copyHTMLTemplate,
    extractSass
  ]
};

module.exports = config;