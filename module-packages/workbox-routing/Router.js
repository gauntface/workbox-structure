import application from 'workboxApplication';

export default class Router {
  constructor() {
    application.INTERNAL.logHelper.log('Router Constructor.');
  }

  registerRoute(capture, handler) {
    application.INTERNAL.logHelper.log('Router.registerRoute() called with ', capture, handler);
  }
}
