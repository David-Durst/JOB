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
            preLoaders: [
                {
                    test: /\.js$/,
                    include: /src/,
                    loader: 'eslint-loader'
                }
            ],
            loaders: []
        },
        eslint: {
            configFile: 'config/.eslintrc'
        },
        devServer: {
            stats: 'errors-only'
        }
    }

    //add the ES6 transpilation loader, with hot reloading if in dev mode
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