var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')

module.exports = function (isDev) {
    var jsLoadersConfig = {
        test: /\.js$/,
        include: path.join(__dirname, 'src')
    }

    if (isDev) {
        jsLoadersConfig.loader = 'babel'
    }
    else {
        jsLoadersConfig.loaders = ['react-hot', 'babel']
    }

    return {
        entry: ['babel-polyfill', './src/app.js'],
        output: {
            path: path.join(__dirname, 'bin'),
            filename: 'app.bundle.js'
        },
        plugins: [new HtmlWebpackPlugin({
            title: "Hello World Title"
        })],
        module: {
            loaders: [jsLoadersConfig]
        }
    }
}