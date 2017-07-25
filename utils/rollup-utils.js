const path = require('path');
const fs = require('fs-extra');
const replace = require('rollup-plugin-replace');

const NAMESPACE_PREFIX = 'google.workbox';
const SRC = path.join(__dirname, '..', 'packages');

// This makes Rollup assume workbox-core will be added to the global
// scope and replace references with the core namespace
const globals = {
  'workbox-core': `${NAMESPACE_PREFIX}.core`,
};
const external = [
  'workbox-core'
];

const getBuildDetails = (moduleName, namespace, buildType) => {
  return {
    entry: `${SRC}/${moduleName}/umd.js`,
    dest: `${SRC}/${moduleName}/build/umd-${buildType}.js`,
    format: 'umd',
    moduleName: `${NAMESPACE_PREFIX}.${namespace}`,
    globals,
    external,
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify(buildType),
      })
    ]
  };
};

module.exports = {
  generateBuildConfig: (moduleName, namespace) => {
    fs.removeSync(`${SRC}/${moduleName}/build/`);

    return [
      getBuildDetails(moduleName, namespace, 'development'),
      getBuildDetails(moduleName, namespace, 'production'),
    ];
  }
};
