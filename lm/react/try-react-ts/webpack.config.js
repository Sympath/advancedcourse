const path = require('path');
const HtmlWbpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const basePath = __dirname;
module.exports = {
    entry: {
        app: './index.tsx',
        appStyles: './css/site.css',
        vendor: [
            'react',
            'react-dom'
        ],
        vendorStyles: [
            '../node_modules/bootstrap/dist/css/bootstrap.css'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.join(basePath,'dist')
    },
    context: path.join(basePath,'src'),
    resolve: {
        extensions: [
            '.js','.ts','.tsx'
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
                options: {
                    useBabel: true
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    devServer: {
        port: 8080
    },
    plugins: [
        new HtmlWbpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]

}