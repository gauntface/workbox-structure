importScripts('./node_modules/workbox-core/build/umd.js');
importScripts('./node_modules/workbox-precaching/build/umd.js');
importScripts('./node_modules/workbox-routing/build/umd.js');
importScripts('./node_modules/workbox-loader/umd.js');

workbox.disableCDN();

workbox.core.options = {
  defaultCacheName: 'overriden-default-cache-name',
};

workbox.precaching.precache([
  {url: '/', revision: '123'},
  {url: '/main.css', revision: '456'},
]);

workbox.routing.registerRoute(new google.workbox.routing.Route());

