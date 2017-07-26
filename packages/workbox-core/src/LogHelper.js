export default class LogHelper {
  constructor({logLevel, logFilter}) {
    console.log('[LogHelper.constructor]', logLevel, typeof logFilter);
  }

  log() {
    console.log('[LogHelper.log()] ', ...arguments);
  }
}
