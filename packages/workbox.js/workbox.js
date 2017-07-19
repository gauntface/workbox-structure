class Workbox {
  constructor(options) {
    console.log('[WorkboxLoader.constructor]', options.packagesPath);
    this._packagesPath = options.packagesPath;

    // This is required
    this.loadModule('workbox-core');

    workbox.INTERNAL.core.default.options = options;
  }

  loadModule(moduleName) {
    console.log('[Loader.load()] ', moduleName);
    importScripts(`${this._packagesPath}/${moduleName}/build/umd.js`);
  }

  get precaching() {
    if (workbox.precaching) {
      return workbox.precaching.default;
    }

    this.loadModule('workbox-precaching');
    return workbox.precaching.default;
  }

  get routing() {
    if (workbox.routing) {
      return workbox.routing.default;
    }

    this.loadModule('workbox-routing');
    return workbox.routing.default;
  }
}
