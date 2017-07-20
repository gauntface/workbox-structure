const rollupUtils = require('../../utils/rollup-utils.js');

export default [
  rollupUtils.generateBuildConfig('workbox-core', 'core')
];
