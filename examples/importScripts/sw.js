importScripts('/import-packages/workbox.js');

const workbox = new Workbox({
  packagesPath: '/module-to-umd',
  defaultCacheName: 'overriden-default-cache-name',
});

workbox.precaching.precache([
  {url: '/', revision: '123'},
  {url: '/main.css', revision: '456'},
]);

workbox.routing.registerRoute(new google.workbox.routing.Route());

