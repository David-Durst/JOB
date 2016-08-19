var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')

module.exports = function (isDev) {
    var configToReturn = {
        entry: [
            'babel-polyfill',
            './src/app.js'
        ],
        output: {
            path: './bin',
            filename: 'app.bundle.js'
        },
        plugins: [new HtmlWebpackPlugin({
            title: 'Hello World Title',
            inject: false,
            template: require('html-webpack-template'),
            appMountId: 'app'
        })],
        module: {
            loaders: []
        }
    }

    //add the js loader
    var jsLoadersConfig = {
        test: /\.js$/,
        include: /src/
    }

    if (!isDev) {
        jsLoadersConfig.loader = 'babel'
    }
    else {
        jsLoadersConfig.loaders = ['react-hot', 'babel']
    }

    configToReturn.module.loaders.push(jsLoadersConfig)

    // turn on devtools if in dev

    if (isDev) {
        configToReturn.devtool = 'cheap-module-eval-source-map'
    }

    return configToReturn;
}