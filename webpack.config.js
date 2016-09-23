var BrowserSyncPlugin = require("browser-sync-webpack-plugin")

module.exports = {
  entry: {
    javascript: "./src/index.js"
  },
  output: {
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, loaders: ["style", "css?modules"] }
    ]
  },
  resolve: {
    extentions: ["", ".js"]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      server: { baseDir: ["."] }
    })
  ]
}
