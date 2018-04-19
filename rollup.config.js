const fs = require('fs');
const pkg = require('./package.json');

const banner = fs.readFileSync('./src/banner.js', 'utf8')
    .replace('${version}', pkg.version);

module.exports = {
    input: './src/stable.js',
    output: [{
        banner,
        file: pkg.main,
        format: 'umd',
        name: 'stable'
    }]
};
