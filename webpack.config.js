const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, './app/index.html'),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  devtool: 'source-map',
  entry : path.join(__dirname, './app/javascripts/routes/index.js'),
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true
  },
  module:{
    loaders: [
      { 
        test: /\.js$/,
        loader: 'babel-loader',
        exclude : /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
            HtmlWebpackPluginConfig, 
            new ExtractTextPlugin({ 
              filename: 'public/style.css', 
              allChunks: true
            })
            ],
  resolve: {
    // add shortcut as alias
    alias: {
      '@components': path.join(__dirname, 'app/javascripts/components'),
      '@containers': path.join(__dirname, 'app/javascripts/containers'),
      '@javascripts': path.join(__dirname, 'app/javascripts'),
      '@store':path.join(__dirname, 'app/javascripts/store'),
      '@sass':path.join(__dirname, 'app/styles/sass'),
      '@actions':path.join(__dirname, 'app/javascripts/actions'),
      '@routes':path.join(__dirname, 'app/javascripts/routes')
    },
    // extensions listed here can be omitted in `import`s
    extensions: ['.js', '.jsx'],
    // directories which are searched implicitly in `import`s
    // modulesDirectories: ['node_modules']
  }
}