(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('workboxApplication')) :
	typeof define === 'function' && define.amd ? define(['workboxApplication'], factory) :
	(global.google = global.google || {}, global.google.workbox = global.google.workbox || {}, global.google.workbox.precaching = factory(global.google.workbox.INTERNAL.application));
}(this, (function (application) { 'use strict';

application = application && application.hasOwnProperty('default') ? application['default'] : application;

class PrecacheController {
  constructor() {
    application.INTERNAL.logHelper.log('WorkboxPrecaching Constructor');
  }

  precache(assets) {
    application.INTERNAL.logHelper.log('WorkboxPrecaching.precache() called with ', assets);
    application.INTERNAL.logHelper.log('WorkboxPrecaching.precache() to cacheName: ', application.options.defaultCacheName);
  }
}

var bundle = {
  PrecacheController
};

return bundle;

})));
