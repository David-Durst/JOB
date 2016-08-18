var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
        path: './bin',
        filename: 'app.bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Hello World Title"
    })],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
}