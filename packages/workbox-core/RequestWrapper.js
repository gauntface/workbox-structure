export default class RequestWrapper {
  fetch({
    request,
    plugins,
    cacheName,
    fetchOptions,
    matchOptions,
  }) {
    console.log('Perform fetch()', arguments);
    // TODO: plugins.beforeFetch()

    // TODO: plugins.afterFetch()
  }

  fetchAndCache({
    request,
    plugins,
    cacheName,
    fetchOptions,
    matchOptions,
  }) {
    console.log('Perform fetchAndCache()', arguments);
    // TODO: Could cacheKey, cacheResponsePlugin, cleanRedirects be altered by
    // plugins

    // This means there will be no _userSpecificedCacheableResponsePlugin
    // The getDefaultCacheableResponsePlugin() can be defined by the
    // handler

    this.fetch(arguments);

    // TODO: plugins.beforeCaching()

    // TODO: plugins.afterCaching()
  }

  // TODO: Could this just be a default plugin same as
  // getDefaultCachableResponsePlugin()
  match({plugins}) {
    console.log('Perform match()', arguments);

    plugins.cacheWillMatch()
  }


}
