const path = require('path');
const fs = require('fs-extra');
const resolve = require('rollup-plugin-node-resolve');

const SRC = 'packages';

const rollupConfigs = [];

fs.removeSync(`./build/`);

rollupConfigs.push({
  entry: './sw.js',
  dest: './build/sw.js',
  format: 'iife',
  plugins: [
    resolve(),
  ],
});

export default rollupConfigs;
