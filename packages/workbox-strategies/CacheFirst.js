import core from 'workbox-core';

export default class CacheFirst {
  constructor(options) {
    // Add default CacheFirst plugins Here
    // Handle any conflicting plugins (if there are any)

    // This should call super() to handle defaults if needed.
    this._options = options;
  }

  handle({request}) {
    core.INTERNAL.requestWrapper.fetchAndCache(
      // Merge request with options
      Object.assign({request}, this._options)
    );
  }
}
