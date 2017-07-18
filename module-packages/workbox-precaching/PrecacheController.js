import application from 'workboxApplication';

export default class PrecacheController {
  constructor() {
    application.INTERNAL.logHelper.log('WorkboxPrecaching Constructor');
  }

  precache(assets) {
    application.INTERNAL.logHelper.log('WorkboxPrecaching.precache() called with ', assets);
    application.INTERNAL.logHelper.log('WorkboxPrecaching.precache() to cacheName: ', application.options.defaultCacheName);
  }
}
