import workbox from '../../module-packages/workbox-application/application';
import precaching from '../../module-packages/workbox-precaching/public-interface';
import routing from '../../module-packages/workbox-routing/public-interface';
import {Route} from '../../module-packages/workbox-routing/public-interface';

workbox.options = {
  defaultCacheName: 'overriden-default-cache-name',
};

precaching.precache([
  {url: '/', revision: '123'},
  {url: '/main.css', revision: '456'},
]);

routing.registerRoute(new Route());
