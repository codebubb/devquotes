const path = require('path');
const { NODE_ENV = 'production' } = process.env;

module.exports = {
    entry: {
        main: './src/index.ts',
        import: './src/import.ts',
    },
    mode: NODE_ENV,
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                ],
            },
        ],
    },
};