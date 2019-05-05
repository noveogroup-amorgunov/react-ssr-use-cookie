const path = require('path');
const webpack = require('webpack');

const IS_DEV = process.env.NODE_ENV !== 'production';
const SRC_DIR = path.join(__dirname, './src');
const DIST_DIR = path.join(__dirname, './dist');

module.exports = {
    entry: path.join(SRC_DIR, 'client'),
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    output: {
        path: DIST_DIR,
        filename: IS_DEV ? '[name].js' : '[name].[hash].js',
        publicPath: '/'
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json']
    },
    devServer: {
        contentBase: DIST_DIR,
        port: 9000,
        historyApiFallback: true,
        publicPath: '/'
    },
    plugins: [
        IS_DEV && new webpack.HotModuleReplacementPlugin()
    ].filter(Boolean)
};
