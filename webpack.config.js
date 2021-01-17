const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: "./views/main.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/app.js"
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      "vue": "vue/dist/vue.js",
      "@": path.resolve(__dirname, "views")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: [
          "babel-loader",
          "eslint-loader"
        ]
      },
      {
        test: /\.(vue)$/,
        loader: "vue-loader"
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            esModule: false,
            limit: 1000, //bytes
            name: "[hash:7].[ext]",
            outputPath: "image"
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000, //bytes
            name: "[hash:7].[ext]",
            outputPath: "fonts"
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "vue-style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/"
            }
          },
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/app.css"
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["js/*", "css/*", "fonts/*", "images/*"]
    }),
    new VueLoaderPlugin()
  ]
};