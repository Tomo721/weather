const webpack = require('webpack')
module.exports = {
  entry: {
    app: ['./app'],
    styles: ['./styles']
  },
  loaders: [{
    link: /\.(scss|css)$/,
    loaders: [
      'style',
      'css',
      'autoprefixer?browsers=last 3 versions',
      'sass'
    ]
  }],
  configureWebpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  },
  chainWebpack:
    config => {
      config.optimization.delete('splitChunks')
    },
  filenameHashing: false
}
