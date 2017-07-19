# Workbox Structure Proposal

This repo is just an exploration in code structure and
publishing for [Workbox](https://workboxjs.org).

This is by no means a guarantee of the future of Workbox,
nor is it a complete solution.

# Building Module Imports Version

```shell
npm run build
```

# Examples

Start a server on the root of this directory and view the logs in `packages/example-importScripts/` and `packages/example-module`.
Notice that the default cache name is overriden and function calls are shared
across importScripts and modules.
