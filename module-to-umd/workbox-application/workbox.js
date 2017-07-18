(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.google = global.google || {}, global.google.workbox = global.google.workbox || {}, global.google.workbox.INTERNAL = global.google.workbox.INTERNAL || {}, global.google.workbox.INTERNAL.application = factory());
}(this, (function () { 'use strict';

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
var workbox = new WorkboxApplication();

return workbox;

})));
