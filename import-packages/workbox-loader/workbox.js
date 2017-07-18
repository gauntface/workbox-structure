class Workbox {
  constructor(options) {
    console.log('[WorkboxLoader.constructor]', options.packagesPath);
    this._packagesPath = options.packagesPath;

    importScripts(`${this._packagesPath}/workbox-application/application.js`);
    google.workbox.INTERNAL.application.options = options;
  }

  loadModule(moduleName, className) {
    console.log('[Loader.load()] ', moduleName, className);
    importScripts(`${this._packagesPath}/${moduleName}/${className}.js`);
  }

  get precaching() {
    if (this._precacheController) {
      return this._precacheController;
    }

    this.loadModule('workbox-precaching', 'bundle');

    this._precacheController = new google.workbox.precaching.PrecacheController({
      defaultCacheName: this._defaultCacheName,
    });
    return this._precacheController;
  }

  get router() {
    if (this._router) {
      return this._router;
    }

    this.loadModule('workbox-routing', 'bundle');

    this._router = new google.workbox.routing.Router();
    return this._router;
  }
}
