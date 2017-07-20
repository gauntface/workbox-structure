importScripts('/packages/workbox-loader/umd.js');

workbox.core.options = {
  defaultCacheName: 'overriden-default-cache-name',
};

workbox.precaching.precache([
  {url: '/', revision: '123'},
  {url: '/main.css', revision: '456'},
]);

workbox.routing.registerRoute(new google.workbox.routing.Route());

