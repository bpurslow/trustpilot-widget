const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
    entry: {
        index: [
            'webpack-dev-server/client?http://localhost:8080',
            './client/index.js',
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(jpe?g|png|svg)$/, loader: 'file-loader', options: {
                name: '[name].[hash].[ext]',
            },
},
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};

