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
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react"]
          }
        },
        test: /\.jsx?$/,
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
    extractSass
  ]
};

module.exports = config;