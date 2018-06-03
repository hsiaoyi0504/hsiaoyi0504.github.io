const ConcatPlugin = require('webpack-concat-plugin');
const DisableOutputWebpackPlugin = require('disable-output-webpack-plugin');
const path = require('path');

nodeModulesPath = path.resolve(__dirname, 'node_modules');
jsFilesPath = path.resolve(__dirname, 'js');

module.exports = {
  entry: path.resolve(__dirname, 'js/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js' // this file will be removed by disable output webpack plugin
  },
  mode: 'production',
  plugins: [
    new DisableOutputWebpackPlugin(),
    new ConcatPlugin({
      uglify: true,
      sourceMap: false,
      name: 'header',
      fileName: 'header.min.js',
      filesToConcat: [
        path.resolve(nodeModulesPath, 'jquery/dist/jquery.js'),
        path.resolve(nodeModulesPath, 'jquery-migrate/dist/jquery-migrate.js'),
        path.resolve(nodeModulesPath, 'bootstrap/dist/js/bootstrap.js')
      ],
    }),
    new ConcatPlugin({
      uglify: true,
      sourceMap: false,
      name: 'body',
      fileName: 'body.min.js',
      filesToConcat: [
        path.resolve(nodeModulesPath, 'jquery.easing/jquery.easing.1.3.js'),
        path.resolve(nodeModulesPath, 'magnific-popup/dist/jquery.magnific-popup.js'),
        path.resolve(jsFilesPath, 'scrolling-nav.js'),
        path.resolve(jsFilesPath, 'main.js')
      ],
    })
  ],
  module: {
    noParse: [/\.js$/] // use noParse to accelerate
  }
}