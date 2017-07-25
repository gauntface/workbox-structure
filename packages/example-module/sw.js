import core from 'workbox-core';
import precaching from 'workbox-precaching';
import routing from 'workbox-routing';
import Route from 'workbox-routing/Route';
import CacheFirst from 'workbox-strategies/CacheFirst';

core.options = {
  defaultCacheName: 'overriden-default-cache-name',
};

precaching.precache([
  {url: '/', revision: '123'},
  {url: '/main.css', revision: '456'},
]);

routing.registerRoute(new Route());

const cacheFirst = new CacheFirst({
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
cacheFirst.handle({request: null});
