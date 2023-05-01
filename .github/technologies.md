
## Use TypeScript and ES modules
If you are coming from scripting, do yourself the favor and familiarize yourself with the two:
1. [TypeScript](https://www.typescriptlang.org/) - If you don't know TypeScript yet, give it an afternoon to get started. It's worth it. This template does not strictly enforce type safety, but it's recommended that you use it.

2. [ES Modules](https://michaelcurrin.github.io/dev-cheatsheets/cheatsheets/javascript/general/modules/es-modules.html) -  (also known as ESM). If you stumble upon `require()` or `module.exports` online, know that those are older ways of importing and exporting code. You may still see them in use in some places, but it's recommended that you build your extension using ESM.

For about a year I have used CommonJS modules and vanilla JavaScript in my extensions. While it worked, the benefits of using TypeScript and ESM are huge. Converting an existing project to use them is a pain and that's why I recommend that you start with them from the beginning.