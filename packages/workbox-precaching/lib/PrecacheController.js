import core from 'workbox-core';

export default class PrecacheController {
  constructor() {
    core.INTERNAL.logHelper.log('WorkboxPrecaching Constructor');
  }

  precache(assets) {
    core.INTERNAL.logHelper.log('WorkboxPrecaching.precache() called with ', assets);
    core.INTERNAL.logHelper.log('WorkboxPrecaching.precache() to cacheName: ', core.options.defaultCacheName);
  }
}
