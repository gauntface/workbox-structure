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

const precaching = new PrecacheController();

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

const router = new Router();

application.options = {
  defaultCacheName: 'overriden-default-cache-name',
};

precaching.precache([
  {url: '/', revision: '123'},
  {url: '/main.css', revision: '456'},
]);

router.registerRoute(new Route());

}());
