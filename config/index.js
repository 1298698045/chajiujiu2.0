
'use strict'
// Template version: 1.1.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const glob = require('glob')
const pages = getEntry('src/views/**/*.html');
function getEntry(globPath) {
    var entries = {},
        basename;

    glob.sync(globPath).forEach(function(entry) {

        basename = path.basename(entry, path.extname(entry));
        entries[basename] = entry;
    });
    return entries;
}
const build = {
    env: require('./prod.env'),
    //index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
}

//每个入口页面生成一个入口添加到build中
for (var pathname in pages) {
    build[pathname] = path.resolve(__dirname, '../dist/' + pathname + '.html')
}
module.exports = {
  build: build,
  dev: {
    env: require('./dev.env'),
    port: process.env.PORT || 8088,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        '/b': {
            target: 'http://xxxxx/',
            changeOrigin: true,
            pathRewrite: {
                '^/b': ''
            }
        },
        '/a': {
            target: 'http://xxxx/',
            changeOrigin: true,
            pathRewrite: {
                '^/a': ''
            }
        }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
