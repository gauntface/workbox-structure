(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('workboxApplication')) :
	typeof define === 'function' && define.amd ? define(['workboxApplication'], factory) :
	(global.google = global.google || {}, global.google.workbox = global.google.workbox || {}, global.google.workbox.routing = factory(global.google.workbox.INTERNAL.application));
}(this, (function (application) { 'use strict';

application = application && application.hasOwnProperty('default') ? application['default'] : application;

class Router {
  constructor() {
    application.INTERNAL.logHelper.log('Router Constructor.');
  }

  registerRoute(capture, handler) {
    application.INTERNAL.logHelper.log('Router.registerRoute() called with ', capture, handler);
  }
}

class Route {
  constructor() {
    application.INTERNAL.logHelper.log('New Route constructed.');
  }
}

class ExpressRoute {
  constructor() {
    console.log('New ExpressRoute constructed.');
  }
}

class NavigationRoute {
  constructor() {
    console.log('New NavigationRoute constructed.');
  }
}

class RegExpRoute {
  constructor() {
    console.log('New RegExpRoute constructed.');
  }
}

var bundle = {
  Router,
  Route,
  ExpressRoute,
  NavigationRoute,
  RegExpRoute
};

return bundle;

})));
