var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')

// make paths absolute using dirname, with fix since config file is in config folder
function makeAbsolutePath(relPath) {
    return path.join(__dirname, '..', relPath)
}

module.exports = function (isDev) {
    var configToReturn = {
        entry: [
            'babel-polyfill',
            makeAbsolutePath('src/main/app.js')
        ],
        output: {
            path: makeAbsolutePath('bin'),
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
                    include: makeAbsolutePath('src'),
                    loader: 'eslint-loader'
                }
            ],
            loaders: []
        },
        eslint: {
            configFile: '.eslintrc.json'
        },
        devServer: {
            stats: 'errors-only'
        }
    }

    // add the ES6 transpilation loader, with hot reloading if in dev mode
    var jsLoadersConfig = {
        test: /\.js$/,
        include: makeAbsolutePath('src')
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