const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


const htmlPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, './src/index.html')
});

const cleanPlugin = new CleanWebpackPlugin(['dist']);
const uglyPlugin = new UglifyJsPlugin({ extractComments: true });

module.exports = {
  devtool: "inline-source-map",
  entry: ["babel-polyfill", "./src/startup.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss?$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS
        ],
        exclude: /node_modules/
    },
    ]
  },
  plugins: [cleanPlugin, htmlPlugin, uglyPlugin]
};