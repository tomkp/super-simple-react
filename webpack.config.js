const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

const babelrc = JSON.parse(fs.readFileSync('./.babelrc').toString());

module.exports = {

    debug: true,

    devtool: 'source-map',

    entry: {
        main: ['./src/Root.js'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules|lib/,
                query: babelrc
            }
        ]
    },
    plugins: [],
    postcss: function () {
        return [
            require('precss'),
            require('autoprefixer')
        ];
    }
};


