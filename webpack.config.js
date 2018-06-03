const ConcatPlugin = require('webpack-concat-plugin');
const path = require('path');

module.exports = {
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js' // this file will not be used
  },
  mode: 'production',
  plugins: [
    new ConcatPlugin({
      uglify: true,
      sourceMap: false,
      name: 'header',
      fileName: 'header.min.js',
      filesToConcat: ['./node_modules/jquery/dist/jquery.js', './node_modules/jquery-migrate/dist/jquery-migrate.js', './node_modules/bootstrap/dist/js/bootstrap.js'],
      attributes: {
          async: true
      }
    }),
    new ConcatPlugin({
      uglify: true,
      sourceMap: false,
      name: 'body',
      fileName: 'body.min.js',
      filesToConcat: ['./node_modules/jquery.easing/jquery.easing.1.3.js', './js/scrolling-nav.js', './node_modules/magnific-popup/dist/jquery.magnific-popup.js', './js/main.js'],
      attributes: {
          async: true
      }
    })
  ]
}