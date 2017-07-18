import workbox from '../../module-packages/workbox-application/application.js';
import PrecacheController from '../../module-packages/workbox-precaching/PrecacheController';
import Router from '../../module-packages/workbox-routing/Router';
import Route from '../../module-packages/workbox-routing/Route.js';

// Step 1: Open up JUST workbox core.
workbox.options = {
  env: 'dev',
  defaultCacheName: 'overriden-default-cache-name',
  logLevel: 'verbose',
  logFilter: (logDetails) => {
    if (logDetails.message.indexOf('/specific-url') !== -1) {
      // Yes display log
      return true;
    }

    // No do not display log.
    return false;
  },
};

// Step 2: Access precaching
const precacheController = new PrecacheController();
precacheController.precache([
  {url: '/', revision: '123'},
  {url: '/main.css', revision: '456'},
]);

// Step 3: Routing
const router = new Router();
router.registerRoute(new Route());

console.log('self.google namespace: ', self.google);
console.log('self.workbox: ', self.workbox);
