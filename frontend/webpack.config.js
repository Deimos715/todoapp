require("@babel/polyfill");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "production", //development, production

    entry: {
        main: ["@babel/polyfill", "./src/index.js"],
    },
    
    output: {
        filename: "js/[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },

    devServer: {
        port: 3000,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
            inject: 'body',
        }),

        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: "styles/[name].[contenthash].css",
        }),
    ],

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                        ]
                    }
                }
            },

            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },

            {
                test: /\.less$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
            },

            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], //используется
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "img/",
                        }
                    }
                ]
            }
        ]
    },

    performance: {
        hints: false, // Отключаем предупреждения о производительности
        maxEntrypointSize: 512000, // Максимальный размер главного бандла
        maxAssetSize: 512000 // Максимальный размер отдельного файла
    }
}