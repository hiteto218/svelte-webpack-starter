const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname + "/public",
    filename: "[name].js",
    chunkFilename: "[name].[id].js",
  },
  devServer: {
    port: 9000,
    watchContentBase: true,
    contentBase: path.join(__dirname, "public"),
  },
  resolve: {
    extensions: [".js", ".svelte"],
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        use: {
          loader: "svelte-loader",
          options: {
            preprocess: require("svelte-preprocess")(),
            hotReload: true,
          },
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
};
