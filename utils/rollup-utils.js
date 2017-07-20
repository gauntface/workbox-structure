const path = require('path');
const fs = require('fs-extra');

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

module.exports = {
  generateBuildConfig: (moduleName, namespace) => {
    fs.removeSync(`${SRC}/${moduleName}/build/`);

    // UMD
    return {
      entry: `${SRC}/${moduleName}/umd.js`,
      dest: `${SRC}/${moduleName}/build/umd.js`,
      format: 'umd',
      moduleName: `${NAMESPACE_PREFIX}.${namespace}`,
      globals,
      external,
    };
  }
};
