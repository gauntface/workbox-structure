importScripts('/packages/workbox.js/workbox.js');

const workbox = new Workbox({
  packagesPath: '/packages',
  defaultCacheName: 'overriden-default-cache-name',
});

workbox.precaching.precache([
  {url: '/', revision: '123'},
  {url: '/main.css', revision: '456'},
]);

workbox.routing.registerRoute(new google.workbox.routing.Route());

