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
    if (google.workbox.precaching) {
      return google.workbox.precaching.default;
    }

    this.loadModule('workbox-precaching', 'public-interface');
    return google.workbox.precaching.default;
  }

  get routing() {
    if (google.workbox.routing) {
      return google.workbox.routing.default;
    }

    this.loadModule('workbox-routing', 'public-interface');
    return google.workbox.routing.default;
  }
}
