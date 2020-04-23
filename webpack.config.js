// requireは、classicなnodeのインポート方法
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// import fromはモダンなインポート方法
// import path from 'path'
//import HtmlWebpackPlugin from 'html-webpack-plugin' //この行を追記


module.exports = {
    // 開発用にwebpackを動かす
    mode: 'development',

    // bundleする基点のファイル
    entry: './src/index.jsx',

    // 出力先を指定する
    // distとか、destがnode.jsのお作法
    // javaだとbuild
    output: {
        // 絶対パスを作る
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[hash].js'
    },

    // webpackがbundleを作る前に、読み込んだファイルに何かしらの処理をする
    module: {
        rules: [
            // jsx(React記法)をjsに変換する
            {
                // 拡張子が、.js または.jsxだったら
                test: /\.jsx$/,
                // node_module以下のものは無視して
                exclude: /node_modules/,
                // babel-loaderを当てる
                // .babelに設定は書いてある
                loader: 'babel-loader'
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
          })
    ]    
}
