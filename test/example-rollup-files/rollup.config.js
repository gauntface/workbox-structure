const path = require('path');
const fs = require('fs-extra');
const alias = require('rollup-plugin-alias');

const SRC = './test/example-rollup-files';
const DIST = `${SRC}/build`;

fs.removeSync(DIST);

const plugins = [
  alias(
    {
    'workbox-core': path.resolve(
      'build/packages/workbox-core/module.js'),
    }
  )
];

const rollupConfigs = [];

const GENERATE_TEST = (fileName) => {
  rollupConfigs.push({
    entry: `${SRC}/${fileName}`,
    dest: `${DIST}/${fileName}`,
    format: 'iife',
    plugins,
  });
};

GENERATE_TEST('precaching-named-import.js');
GENERATE_TEST('precaching-default-import.js');
GENERATE_TEST('both-named-imports.js');
GENERATE_TEST('both-default-imports.js');

export default rollupConfigs;
