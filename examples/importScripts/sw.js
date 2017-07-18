importScripts('/import-packages/workbox-loader/workbox.js');
// importScripts('/module-to-umd/workbox-application/workbox.js');

// Step 1: Open up JUST workbox core.
const workbox = new Workbox({
  env: 'dev',
  defaultCacheName: 'overriden-default-cache-name',
  packagesPath: '/module-to-umd',
  logLevel: 'verbose',
  logFilter: (logDetails) => {
    if (logDetails.message.indexOf('/specific-url') !== -1) {
      // Yes display log
      return true;
    }

    // No do not display log.
    return false;
  },
});

// Step 2: Access precaching
workbox.precaching.precache([
  {url: '/', revision: '123'},
  {url: '/main.css', revision: '456'},
]);

// Step 3: Routing
workbox.router.registerRoute(new google.workbox.routing.Route());

console.log('self.google namespace: ', self.google);
console.log('self.workbox: ', self.workbox);
