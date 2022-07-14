const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
__dirname = path.resolve(__dirname, "..")

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, "src/javascript/main.js"),
    },
    output: {
        path: path.resolve(__dirname, 'dist/javascript'),
        filename: 'main.js',
        clean: true,
        // assetModuleFilename: '[path][name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 8008,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            // {
            //     test: /\.scss$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader'],
            // },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[path][name].[ext]',
            //                 context: path.resolve(__dirname, "src/"),
            //                 outputPath: 'dist/',
            //                 publicPath: '../',
            //                 useRelativePaths: true
            //             }
            //         }
            //     ]
            // },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     type: 'asset/resource',
            // },
        ],
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     title: 'Weather App',
        //     filename: 'index.html',
        //     template: 'src/html/index.html',
        // }),
        // new BundleAnalyzerPlugin(),
    ],
}