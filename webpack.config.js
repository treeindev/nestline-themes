const path = require('path');

module.exports = {
	mode: 'production',
	entry: {
        default: './src/default/default.scss',
        cherry: './src/cherry/cherry.scss',
        dark: './src/dark/dark.scss'
    },
    output: {
        path: path.resolve( __dirname, 'dist'),
        filename: 'js/webpack/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'css/[name].min.css'
                    }
                }, 'sass-loader']
			}
        ]
    }
};
