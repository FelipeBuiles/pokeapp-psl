var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '',
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'ng-annotate-loader!babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.html$/,
            loader: 'raw-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'file-loader',
            options: {
                name: './img/[name].[ext]'
            }
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
        { test: /\.ttf$/,    loader: "file-loader" },
        { test: /\.eot$/,    loader: "file-loader" },
        { test: /\.svg$/,    loader: "file-loader" }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    devServer: {
        contentBase: './dist',
        stats: {
            modules: false,
            cached: false,
            colors: true,
            chunk: false
        }
    }
}