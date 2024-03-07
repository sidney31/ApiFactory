const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = (env) => {
  return {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true,
        publicPath: '/',
    },

    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          use: [
            "style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.js$/,
          exclude: path.resolve(__dirname, '/node_modules/'),
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env'],
            },
            query: {compact: false},
          },
        },
      ],

    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'templates', "base.html"),
        publicPath: '/build/'
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'bootstrap': 'bootstrap',
      }),
    ]
  }
}