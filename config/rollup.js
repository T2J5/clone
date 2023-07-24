const babel = require('rollup-plugin-babel');
const pkg = require('../package.json');

const version = pkg.version;

const banner = `/*!
* ${pkg.name} ${version}
* Licensed under MIT
*/
`;

exports.banner = banner;

/**
 * 不使用独立的Babel配置文件，所以babelrc和modules都设置false
 * loose设置为true 是为了兼容IE8
 *
 */
function getCompiler(opt) {
  return babel({
    babelrc: false,
    runtimeHelpers: true,
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers:
              'last 2 versions, > 1%, ie >= 8, Chrome >= 45, safari >= 10',
            node: '0.12',
          },
          modules: false,
          loose: true,
        },
      ],
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: 2,
        },
      ],
    ],
    exclude: 'node_modules/*',
  });
}

exports.getCompiler = getCompiler;
