## index.html and index-dev.html
You may notice we have both an `index.html` file and an `index-dev.html` file. The dev version redirects the host Adobe app to the local server during development.
In our `CSXS.manifest.xml` file we mention `index-dev.html` as our `MainPath`.

This template uses my plugin [rollup-plugin-bundle-cep-manifest
](https://www.npmjs.com/package/rollup-plugin-bundle-cep-manifest) to automatically bundle our CSXS folder. It will automatically replace `index-dev.html` with `index.html` when building for production.

Notice that if you want to use your own naming convention for your html files, the plugin might not be able to resolve the correct file. In that case, head over to the [plugin's readme](https://www.npmjs.com/package/rollup-plugin-bundle-cep-manifest#automatic) to learn how to configure it manually.