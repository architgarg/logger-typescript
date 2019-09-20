const path              = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: path.join(__dirname, './index.ts'),
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "./@types"),
        to: path.join(__dirname, "./dist/@types")
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "./package.json"),
        to: path.join(__dirname, "./dist/")
      }
    ])
  ]
};
