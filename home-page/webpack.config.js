const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
module.exports ={
  entry:{
    main: __dirname + "/src/main.js"
    //vendor:[]
  },
  output: {
    path: __dirname + "/build",
    filename: "js/[name].bundle.js",
    publicPath: '',
  },
  devtool: "none",
  devServer: {
    contentBase: "./build",
    historyApiFallback: true,
    inline: true
  },
  module: {
    rules: [
      {
        test: /(\.js)$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback:"style-loader",
          use: 'css-loader',
          publicPath:'../'
        })
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath:'img/'
          }
        }
        ]
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin('css/[name].css'),
      new HtmlWebpackPlugin({
        template: 'html-withimg-loader!' + path.resolve('./src', 'index.html'),
        filename: "index.html",
      })
  ]
}