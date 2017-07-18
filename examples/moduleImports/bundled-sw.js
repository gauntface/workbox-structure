(function () {
'use strict';

class LogHelper {
  constructor({logLevel, logFilter}) {
    console.log('[LogHelper.constructor]', logLevel, typeof logFilter);
  }

  log() {
    console.log('[LogHelper.log()] ', ...arguments);
  }
}

class WorkboxApplication {
  constructor() {
    console.log('[Workbox-Core] Constructor');

    this._options = {
      packagesPath: '/module-packages',
      defaultCacheName: 'workbox-default-cache-name',
    };
  }

  get options() {
    return this._options;
  }

  set options(newOptions) {
    this._options = Object.assign(this._options, newOptions);
  }

  get INTERNAL() {
    if (this._internal) {
      return this._internal;
    }

    this._internal = {};
    this._internal.logHelper = new LogHelper({
      logLevel: this._options.logLevel,
      logFilter: this._options.logFilter
    });

    return this._internal;
  }
}

// Replace with an instance of a WorkboxApplication.
var application = new WorkboxApplication();

class PrecacheController {
  constructor() {
    application.INTERNAL.logHelper.log('WorkboxPrecaching Constructor');
  }

  precache(assets) {
    application.INTERNAL.logHelper.log('WorkboxPrecaching.precache() called with ', assets);
    application.INTERNAL.logHelper.log('WorkboxPrecaching.precache() to cacheName: ', application.options.defaultCacheName);
  }
}

class Router {
  constructor() {
    application.INTERNAL.logHelper.log('Router Constructor.');
  }

  registerRoute(capture, handler) {
    application.INTERNAL.logHelper.log('Router.registerRoute() called with ', capture, handler);
  }
}

class Route {
  constructor() {
    application.INTERNAL.logHelper.log('New Route constructed.');
  }
}

// Step 1: Open up JUST workbox core.
application.options = {
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

}());
