# JavaScript Heap Out-Of-Memory Issue

This repository serves as a minimum reproducible example for WebPack issue webpack/webpack-cli/issues/4477, demonstrating an issue with multiple WebPack configurations.

It's supposed to transpile a tiny TypeScript file to JavaScript utilizing 26 different WebPack `devtool` options.

Running either `npm run webpack` or `npx --max-old-space-size=10240 webpack build` results in Node.js fatal error:

```
<--- JS stacktrace --->

FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
----- Native stack trace -----
```

No matter how high the available heap memory is set using the Node.js `--max-old-space-size` option, the WebPack build never succeeds.

The build succeeds if the number of configurations in the `webpack.config.js` file is lowered to about `8`.

However, there is only a tiny TypeScript file to be transpiled. This shouldn't fail even when building 26 versions from it.