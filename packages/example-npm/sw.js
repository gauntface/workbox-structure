importScripts('./node_modules/workbox-core/build/umd.js');
importScripts('./node_modules/workbox-precaching/build/umd.js');
importScripts('./node_modules/workbox-routing/build/umd.js');

google.workbox.core.options = {
  defaultCacheName: 'overriden-default-cache-name',
};

google.workbox.precaching.default.precache([
  {url: '/', revision: '123'},
  {url: '/main.css', revision: '456'},
]);

google.workbox.routing.default.registerRoute(new google.workbox.routing.Route());

