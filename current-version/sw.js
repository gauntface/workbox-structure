importScripts('./node_modules/workbox-runtime-caching/build/importScripts/workbox-runtime-caching.dev.v1.1.0.js');

const requestWrapper = new workbox.runtimeCaching.RequestWrapper({
  cacheName: 'example-cache-name',
  cacheId: 'cache-id',
  plugins: [],
  fetchOptions: {
    body: 'hello'
  },
  matchOptions: {
    ignoreSearch: true,
  }
});

const cacheFirst = new workbox.runtimeCaching.CacheFirst({
  requestWrapper
});
