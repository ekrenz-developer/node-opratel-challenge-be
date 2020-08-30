const path = require("path");
const Dotenv = require("dotenv-webpack");
const nodeExternals = require("webpack-node-externals")

module.exports = {
  target: "node",
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [
    nodeExternals()
  ],
  entry: {
    app: ["./src/index.ts"],
  },
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new Dotenv(),
  ],
};
