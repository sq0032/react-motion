var webpack = require('webpack');

module.exports = {
    entry: [
        "./js/app.js"
    ],
    output: {
        path: __dirname,
        filename: "./js/bundle.js"
    },
    module:{
        loaders:[
            { test: /\.css$/, loader: "style!css"},
            { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loaders: ["babel?stage=1"]}
        ]
    }
}