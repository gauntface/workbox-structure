const path = require('path');
const alias = require('rollup-plugin-alias');

export default [
  // Bundle the rollup service worker
  {
    entry: './test/example-rollup-files/precaching-named-import.js',
    dest: './test/example-rollup-files/bundled/precaching-named-import.js',
    format: 'iife',
    plugins: [alias({
      workboxApplication: path.resolve(
        './module-packages/workbox-application/application.js'
      ),
    })],
  },
];
