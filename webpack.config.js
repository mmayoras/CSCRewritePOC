module.exports = {
    entry: './src/app.jsx',
    output: {
        path: __dirname + '/src/main/webapp/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                exclude: /(s-alert-default.css|s-alert-css-effects|normalize.css)/,
                loader: 'style-loader!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'
            },
            {
                test: /\.css$/,
                include: /(s-alert-default.css|s-alert-css-effects|normalize.css)/,
                loader: 'style-loader!css-loader?sourceMap'
            }
        ]
    }
};