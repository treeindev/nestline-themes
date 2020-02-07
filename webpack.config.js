const path = require('path');

module.exports = {
	mode: 'production',
	entry: [
		'./src/styles/index.scss', 
	],
    output: {
        path: path.resolve( __dirname, 'dist')
    },
    module: {
        rules: [
            {
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'css/main.min.css',
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			}
        ]
    }
};
