(() => {
  class Workbox {
    constructor(options) {
      console.log('[WorkboxLoader.constructor]');

      this._useCDN = true;
      this._packagesPath = '/packages';
      this._DEFAULTS = {};

      // This is required
      if (!google || !google.workbox || !google.workbox.core) {
        this._loadModule('workbox-core');
      }
    }

    _loadModule(moduleName) {
      if (!this._useCDN) {
        throw new Error(`Missing module '${moduleName}.`);
      }
      console.log('[Loader.load()] ', moduleName);
      importScripts(`${this._packagesPath}/${moduleName}/build/umd.js`);
    }

    disableCDN() {
      this._useCDN = false;
    }

    get core() {
      return google.workbox.core;
    }

    get precaching() {
      if (google.workbox.precaching) {
        return google.workbox.precaching.default;
      }

      this._loadModule('workbox-precaching');
      return google.workbox.precaching.default;
    }

    get routing() {
      if (google.workbox.routing) {
        return google.workbox.routing.default;
      }

      this._loadModule('workbox-routing');
      return google.workbox.routing.default;
    }
  }

  self.workbox = new Workbox();
})();
