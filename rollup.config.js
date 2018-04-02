var fs = require('fs');
var pkg = require('./package.json');

var banner = fs.readFileSync('./src/banner.js', 'utf8')
    .replace('${version}', pkg.version);

module.exports = {
    input: './src/stable.js',
    output: [{
        file: pkg.main,
        format: 'umd'
    }, {
        file: pkg.module,
        format: 'es'
    }],
    name: 'stable',
    banner: banner
};
