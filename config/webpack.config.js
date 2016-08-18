var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/app.js',
    output: {
        path: './bin',
        filename: 'app.bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Hello World Title"
    })]
}