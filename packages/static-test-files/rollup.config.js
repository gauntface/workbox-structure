const path = require('path');
const fs = require('fs-extra');
const resolve = require('rollup-plugin-node-resolve');

fs.removeSync(`./build/`);

const rollupConfigs = [];

const buildFile = (filename) => {
  rollupConfigs.push({
    entry: `./${filename}`,
    dest: `./build/${filename}`,
    format: 'iife',
    plugins: [
      resolve(),
    ],
  });
};

buildFile('both-default-imports.js');
buildFile('both-named-imports.js');
buildFile('precaching-default-import.js');
buildFile('precaching-named-import.js');

export default rollupConfigs;
