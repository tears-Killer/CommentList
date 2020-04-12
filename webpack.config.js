const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')



const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})


module.exports = {
    mode: 'development',
    plugins: [
        htmlPlugin
    ],
    module: {
        rules: [
            { test: /\.js|.jsx$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.scss$/, use: [{ loader: 'style-loader' }, {
                    loader: 'css-loader',
                    options: {
                        modules: { localIdentName: '[path][name]-[local]-[hash:5]' }
                    }
                }, { loader: 'sass-loader' }]
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
        alias: {
            "@": path.join(__dirname, './src'),
            "components": path.join(__dirname, './src/components')
        }
    }
}