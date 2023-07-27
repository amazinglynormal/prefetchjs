const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  target: "web",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "prefetch.js",
    library: {
      name: "PrefetchJS",
      type: "umd",
      export: "default",
      umdNamedDefine: true,
    },
  },
  module: {
    rules: [
      { test: /\.(js|ts)$/, exclude: /node_modules/, loader: "babel-loader" },
    ],
  },
};
