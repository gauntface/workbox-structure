import workbox from 'workbox-core';
import precaching from 'workbox-precaching';
import routing from 'workbox-routing';
import Route from 'workbox-routing/lib/Route';

workbox.options = {
  defaultCacheName: 'overriden-default-cache-name',
};

precaching.precache([
  {url: '/', revision: '123'},
  {url: '/main.css', revision: '456'},
]);

routing.registerRoute(new Route());
