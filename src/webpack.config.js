const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCss = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

console.log(ENTRY_FILE);
const config = {
  entry: ["@babel/polyfill", ENTRY_FILE],
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(scss)$/,
        use: ExtractCss.extract([
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader", // css코드가 브라우저마다 호환가능하도록 만드는 loader
            options: {
              plugins() {
                return [autoprefixer({ overrideBrowserslist: "cover 99.5%" })];
              }
            }
          },
          {
            loader: "sass-loader" // Sass나 scss를 받아서 normal css로 변환
          }
        ])
      }
    ]
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js"
  },
  plugins: [new ExtractCss("styles.css")]
};

module.exports = config;
