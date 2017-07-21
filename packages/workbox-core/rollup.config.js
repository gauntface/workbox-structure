const rollupUtils = require('../../utils/rollup-utils.js');

export default [
  rollupUtils.generateBuildConfig('workbox-core', 'google.workbox.INTERNAL.core')
];
