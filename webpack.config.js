const path = require('path');
const glob = require('glob');
const ReplacePlugin = require('webpack-plugin-replace');
const pkg = require('./package.json');

console.log(pkg);


const entries = glob.sync('./src/*.ts')
        .reduce(
            (entries, entry) =>
                Object.assign(entries,
                    { [entry.replace('./src/', '').replace('.ts', '')]: entry }),
            {});
console.log('entries:', entries);

module.exports = {
    mode: 'development',
    // devtool: false,
    // devtool: 'eval',
    // devtool: 'source-map',
    // devtool: 'inline-source-map',
    // devtool: 'eval-source-map',
    devtool: 'cheap-source-map',
    // devtool: 'inline-cheap-source-map',
    // devtool: 'cheap-module-source-map',
    // devtool: 'cheap-eval-source-map',
    // devtool: 'hidden-source-map',
    // devtool: 'nosources-source-map',
    entry: entries,
    // entry: {
    //     index: './src/main/index.ts'
    // },
    output: {
        // filename: '[name].[chunkhash].js',
        filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader' }
            // { include: [path.resolve(__dirname, 'src/main')] }
        ]
    },
    plugins: [
        new ReplacePlugin({
            include: [
                "src"
            ],
            values: {
                '"@APP_INFO@"': JSON.stringify(
                    [
                        "name",
                        "version",
                        "description",
                        "keywords",
                        "license",
                        "author",
                        "homepage",
                        "repository",
                        "bugs"
                    ].reduce((a, v) => (a[v] = pkg[v], a), {})
                )

            }
        })
    ]
};
