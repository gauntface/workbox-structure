import core from 'workbox-core';
import errorCodes from './src/error-messages';

export default class PrecacheController {
  constructor() {
    core.INTERNAL.logHelper.log('WorkboxPrecaching Constructor');

    if (errorCodes) {
      console.log('WorkboxPrecaching Example Error Message: ', errorCodes['example-error-code']);
    } else {
      console.log('No Error Codes Defined');
    }

    if (process.env.NODE_ENV !== 'production') {
      core.INTERNAL.assertions.check();
    }
  }

  precache(assets) {
    core.INTERNAL.logHelper.log('WorkboxPrecaching.precache() called with ', assets);
    core.INTERNAL.logHelper.log('WorkboxPrecaching.precache() to cacheName: ', core.options.defaultCacheName);
  }
}
