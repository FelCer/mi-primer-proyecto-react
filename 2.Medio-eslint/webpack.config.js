const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {

    var mode = (env.NODE_ENV) ? env.NODE_ENV : "";

    var plugins = [
        new MiniCssExtractPlugin({
            filename: path.resolve(__dirname, "assets/[name].css")
        }),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ]

    if (env.NODE_ENV === 'production') {
        plugins.push(
            new CleanWebpackPlugin()
        );
        mode = "production"
    }

    // Try the environment variable, otherwise use root
    const ASSET_PATH = process.env.ASSET_PATH || '/';

    return {
        mode: mode,
        entry: path.resolve(__dirname, './src/index.js'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
            publicPath: ASSET_PATH,
        },
        resolve: {
            extensions: ['.js', 'jsx']
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react'
                            ]
                        }
                    }
                },
                {
                    test: /\.hmtl/,
                    use: [
                        {
                            loader: "html-loader"
                        }
                    ]
                },
                {
                    exclude: /node_modules/,
                    test: /\.(s*)css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
                },
            ]
        },
        plugins
    }
};
