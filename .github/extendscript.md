
## Evaluating extendscript files
If you want to evaluate an entire `jsx` extendscript file, do it like so:
```js
import jsxContent from './jsx/file.jsx?extendscript';
new CSInterface().evalScript(jsxContent);
```
This template uses my plugin [rollup-plugin-import-extendscript](https://www.npmjs.com/package/rollup-plugin-import-extendscript) to import extendscript files into your project. If you want to include other file from within your extendscript file, use `#include './other.jsx'`. The plugin will automatically resolve and merge all those files into one.

⚠️ : For now this template does not support `jsxbin` nor it converts your `jsx` files to `jsxbin` upon build.