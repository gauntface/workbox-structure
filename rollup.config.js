const path = require('path');
const alias = require('rollup-plugin-alias');

export default [
  // Bundle the rollup service worker
  {
    entry: 'examples/moduleImports/sw.js',
    dest: 'examples/moduleImports/bundled-sw.js',
    format: 'iife',
    plugins: [alias({
      workboxApplication: path.resolve(
        './module-packages/workbox-application/application.js'
      ),
    })],
  },

  // Create the UMD version of the workbox application
  // This creates the global google.workbox.INTERNAL.application
  // instance.
  {
    entry: 'module-packages/workbox-application/application.js',
    dest: 'module-to-umd/workbox-application/application.js',
    format: 'umd',
    moduleName: 'google.workbox.INTERNAL.application'
  },

  // Create the bundled precaching file
  {
    entry: 'module-packages/workbox-precaching/bundle.js',
    dest: 'module-to-umd/workbox-precaching/bundle.js',
    format: 'umd',
    moduleName: 'google.workbox.precaching',
    globals: {
      'workboxApplication': 'google.workbox.INTERNAL.application',
    },
    external: [
      'workboxApplication'
    ],
  },

  // Create the bundled routing file
  {
    entry: 'module-packages/workbox-routing/bundle.js',
    dest: 'module-to-umd/workbox-routing/bundle.js',
    format: 'umd',
    moduleName: 'google.workbox.routing',
    globals: {
      'workboxApplication': 'google.workbox.INTERNAL.application',
    },
    external: [
      'workboxApplication'
    ],
  }
];
