const webpack = require('webpack');
const htmlwebpackplugin = require('html-webpack-plugin');

module.exports ={
  entry: __dirname + "/src/main.js",
  output: {
    path: __dirname + "/build/js",
    filename: "bundle.js"
  },
  devtool: "none",
  devServer: {
    contentBase: "./build",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  module: {
    rules: [
      {
        test: /(\.js)$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      }
    ]
  }
}
//* npm install --save-dev babel-core babel-loader babel-preset-es2015
//* npm install --save-dev style-loader css-loader
//npm install --save-dev file-loader

//将css单独打包
/*首先需要安装插件

npm install extract-text-webpack-plugin –save-dev
然后在webpack.config.js 中声明插件

// 引入css 单独打包插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// 设置生成css 的路径和文件名，会自动将对应entry入口js文件中引入的CSS抽出成单独的文件
var packCSS = new ExtractTextPlugin('./css/[name].min.css');
在plugins 中引入并使用

plugins: [
  packCSS
]
我们需要首先在js 中引用相应的css文件

 require('./css/plan.css');

然后这个插件会自动将js中的css文件提取出来，生成单独的文件
*/