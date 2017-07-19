class Workbox {
  constructor(options) {
    console.log('[WorkboxLoader.constructor]', options.packagesPath);
    this._packagesPath = options.packagesPath;

    // This is required
    this.loadModule('workbox-core');

    google.workbox.INTERNAL.core.default.options = options;
  }

  loadModule(moduleName) {
    console.log('[Loader.load()] ', moduleName);
    importScripts(`${this._packagesPath}/${moduleName}/build/umd.js`);
  }

  get precaching() {
    if (google.workbox.precaching) {
      return google.workbox.precaching.default;
    }

    this.loadModule('workbox-precaching');
    return google.workbox.precaching.default;
  }

  get routing() {
    if (google.workbox.routing) {
      return google.workbox.routing.default;
    }

    this.loadModule('workbox-routing');
    return google.workbox.routing.default;
  }
}
