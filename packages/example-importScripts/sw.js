importScripts('/packages/workbox-loader/umd.js');

const workbox = new Workbox({
  // Can be 'dev' or 'prod'
  env: 'dev'
});

workbox.core.options = {
  defaultCacheName: 'overriden-default-cache-name',
};

workbox.precaching.precache([
  {url: '/', revision: '123'},
  {url: '/main.css', revision: '456'},
]);

workbox.routing.registerRoute(new google.workbox.routing.Route());

