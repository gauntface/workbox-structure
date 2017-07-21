class Workbox {
  constructor(options) {
    console.log('[WorkboxLoader.constructor]');

    this._useCDN = (typeof options.useCDN !== 'undefined') ?
      options.useCDN : true;
    this._packagesPath = '/packages';
    this._env = options.env === 'production' ? options.env : 'development';
    this._DEFAULTS = {};

    // This is required
    if (!self.google || !self.google.workbox || !self.google.workbox.core) {
      this._loadModule('workbox-core');
    }
  }

  _loadModule(moduleName) {
    if (!this._useCDN) {
      throw new Error(`Missing module '${moduleName}.`);
    }
    console.log('[Loader.load()] ', moduleName);
    importScripts(`${this._packagesPath}/${moduleName}/build/umd-${this._env}.js`);
  }

  get core() {
    return google.workbox.core;
  }

  get precaching() {
    if (google.workbox.precaching) {
      return google.workbox.precaching.instance;
    }

    this._loadModule('workbox-precaching');
    return google.workbox.precaching.instance;
  }

  get routing() {
    if (google.workbox.routing) {
      return google.workbox.routing.instance;
    }

    this._loadModule('workbox-routing');
    return google.workbox.routing.instance;
  }
}
