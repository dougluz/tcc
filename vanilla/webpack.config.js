'use strict';
var path = require('path');
var cache = {};
var rules = [
    {
        test: /\.js$/,
        use: 'babel-loader'
    },
    {
        test: /\.css$/,
        use: 'style-loader!css-loader'
    }
];
var extensions = [
    '.js', '.jsx', '.es6.js'
];

module.exports = [{
    cache: cache,
    module: {
        rules: rules
    },
    entry: {
        main: './src/Main.js',
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js'
    },
    resolve: {
        extensions: extensions,
        modules: [
            __dirname,
            path.resolve(__dirname, "src"),
            "node_modules"
        ],
        alias: {

        }
    }
}]