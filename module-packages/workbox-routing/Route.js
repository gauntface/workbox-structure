import application from 'workboxApplication';

export default class Route {
  constructor() {
    application.INTERNAL.logHelper.log('New Route constructed.');
  }
}
