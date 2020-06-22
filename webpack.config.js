const path = require('path');

const webpackConf = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js'
  },
  devServer: {
    contentBase: __dirname + '/public'
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      {
        test: /\.tsx?$/,
        loader: 'ts-loader?configFile="tsconfig.json"',
        options: {
          configFile: 'tsconfig.json'
        }
      }
    ]
  },
  plugins: []
};

module.exports = webpackConf;
