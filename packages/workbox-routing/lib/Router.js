import core from 'workbox-core';

export default class Router {
  constructor() {
    core.INTERNAL.logHelper.log('Router Constructor.');
  }

  registerRoute(capture, handler) {
    core.INTERNAL.logHelper.log('Router.registerRoute() called with ', capture, handler);
  }
}
