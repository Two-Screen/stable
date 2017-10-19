var fs = require('fs');
var pkg = require('./package.json');

module.exports = {
    input: './src/stable.js',
    output: {
        file: pkg.main,
        format: 'umd'
    },
    name: 'stable',
    banner: fs.readFileSync('./src/banner.js', 'utf8')
};