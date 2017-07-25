import LogHelper from './src/LogHelper';
import assertions from './src/Assertions';

class WorkboxCore {
  constructor() {
    console.log('[Workbox-Core] Constructor');

    this._options = {
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
    this._internal.assertions = assertions;

    return this._internal;
  }
}

// Force a single instance.
export default new WorkboxCore();
