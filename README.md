# 🌼  CEP-Vite-Template
Get started creating adobe CEP extensions with Good Boy Ninja's Vite template.

## Why do I need a template?
If you are new to CEP extensions and only have extendscript knowledge, you will quickly find out that CEP is not so plug and play. Unlike scripts, there is a lot of setup involved. You might think to yourself 'I ain't afraid of no setup' and that's fine, but if you're gonna go that route beware that it will take a lot of time and effort to get your extension up and running.

Using a template does not mean you don't have to learn how CEP works. It just saves you from hours of googling and trial and error. You will still have to familiarize yourself with CEP, Vite, node.js, npm and all of those tools. It's better that you focus on learning and creating your extension rather than setting up your environment.

> Users don't think you're cool because you set up your environment from scratch. They think you're cool because you made a cool extension.

## This is a lo-fi starting point
Better use [BOLT-CEP](https://github.com/hyperbrew/bolt-cep) if you are:
1. Already comfortable with **web development** and want to get started with CEP quickly.
2. Already using frameworks like React, Vue or Svelte and want to use them in your extension.


<br/>
<br/>

# Getting started
## First time setup (only once)

0. Enable [PlayerDebugMode](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_8.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#debugging-unsigned-extensions) on your machine.
1. Clone this repo to your local machine and open the folder in VSCode.
2. Open a terminal and run `npm install` to install all dependencies.
3. From the same terminal, run `node symlink` to symlink the extension folder to your CEP extensions folder. (⚠️ Using Windows? Make sure to run VSCode as administator first)
4. Search & Replace all instances of:
    - `com.developername.toolname.panel` with your extension ID (For example: `com.goodboyninja.skew.panel`)
    - `%TOOLNAME%` with your extension name (For example: `Skew`)

5. in `/CSXS/manifest.xml` you will find a commented list of apps that your extension supports. Uncomment the ones you want to support (By default we support After-Effects 22.0 and later).
6. Restart your Adobe app so it can find the symlinked extension for the first time.

Now that everything is set up, follow the steps below to start developing your extension.

## Development setup (every time you want to work on your extension)
1. With your project open in VSCode, open a terminal and run `npm run dev` to start the dev server.
2. If Vite launches the dev server on a port other than `5173` you will have to go to `/index-dev.html` and change the port number to match the one vite is using.
3. Open your Adobe app and go to `Window > Extensions > Your extension name` to open your extension.

From now on, every time you make a change to your code, Vite will automatically reload your extension in the Adobe app.


## Start Coding
Head down to `src/index.ts` to write your first lines of code. Good Luck!

<br/>
<br/>

# Building your final extension for distribution
When you are happy with your panel, follow these steps:

1. If you haven't already, create a `.env` file in the root of your project and add the following lines:
```
CERT_COUNTRY=YOURCONTRY
CERT_PROVINCE=YOURCONTRY
CERT_ORG=YOURORGNAME
CERT_NAME=YOURNAME
CERT_PASSWORD=YOURPASSWORD
CERT_EMAIL=YOUREMAIL
```
2. Change the values to match your own information (Note that `CERT_COUNTRY` and `CERT_PROVINCE` are two letter codes, for example `US` and `CA`. Not following this format can cause your build to fail).
3. Save the `.env` file.
4. Open a terminal in VSCode and run `npm run build` to build your extension.

Once the build is complete, you will find your `.zxp` file in `/dist/%TOOLNAME%.zxp`.

⚠️This file gets overwritten every time you run `npm run build`.
When you are ready to share this latest build, move your `zxp` file to `/zxp/release/VERSION`, or anywhere else you want to keep it safe.

## Testing your build
1. Through the ZXP installer, find any previous versions of your tool and click `Uninstall`.
2. Install your latest build.

⚠️ Don't skip uninstalling! ZXP installer may try to override our symlinked folder, and by doing that, delete our actual working files.




<br/>
<br/>
<br/>
<br/>

## ❗Use GitHub, backup often
Unlike scripts, extensions can grow big quite easily. Please use git and github and sync often. Dropbox, or other backup solutions can be life savers.

<br/>
<br/>
<br/>
<br/>



# Development tips
## Debugging
ELI5: this is the F12 equivalent for your extension.

ELI15: Adobe provides a way to debug your extension **while it's running**.
What it means is that you can open a Chrome DevTools window and see the console logs of your extension, as well as inspect the DOM and use the debugger.

To do that, follow these steps:
1. Open your extension, make sure it's running.
2. Open Chrome (Yes, it has to be Chrome) and go to `localhost:8080`.
3. You should see `Inspectable WebContents` followed by a link. Click that link.
4. You should now see a Chrome DevTools window with your extension's console logs. You can even inspect elements right inside your extension. Keep this window open side by side with your Adobe app and you can debug your extension in real time.
5. If you close your extension, you will have to repeat steps 1-3.

In case something doesn't work:
* Make sure your extension is running.
* Make sure you are using Chrome.
* Go to the `.debug` file and make sure that Host Name matches the one in your manifest file.
* Go to the `.debug` file and make sure the Extension Id matches the one in your manifest file.
* Go to the `.debug` file and make sure the Port is still set to `8080`. You can use other ports, just make sure you navigate to the right one in step 2.

* Doomsday scenario: If something feels cursed, it probably is. Try restarting your computer.

Common points of confusion:
* The localhost debugging link has **nothing** to do with your vite dev server. It's a completely different thing.


<br/>

## Evaluating extendscript files
If you want to evaluate an entire `jsx` extendscript file, do it like so:
```js
import jsxContent from './jsx/file.jsx?extendscript';
new CSInterface().evalScript(jsxContent);
```
This template uses my plugin [rollup-plugin-import-extendscript](https://www.npmjs.com/package/rollup-plugin-import-extendscript) to import extendscript files into your project. If you want to include other file from within your extendscript file, use `#include './other.jsx'`. The plugin will automatically resolve and merge all those files into one.

⚠️ : For now this template does not support `jsxbin` nor it converts your `jsx` files to `jsxbin` upon build.

<br/>

## Adding App Icons
You can have icons show up in the ZXP installer, which makes the user's first touch with your app a little nicer.
Go to `CSXS/manifest.xml` and uncomment the `<Icon>` tags at the bottom of the file. Follow the format of the now uncommented code to add your own icons under `CSXS/icons/`.

<br/>

## Use TypeScript and ES modules
If you are coming from scripting, do yourself the favor and familiarize yourself with the two:
1. [TypeScript](https://www.typescriptlang.org/) - If you don't know TypeScript yet, give it an afternoon to get started. It's worth it. This template does not strictly enforce type safety, but it's recommended that you use it.

2. [ES Modules](https://michaelcurrin.github.io/dev-cheatsheets/cheatsheets/javascript/general/modules/es-modules.html) -  (also known as ESM). If you stumble upon `require()` or `module.exports` online, know that those are older ways of importing and exporting code. You may still see them in use in some places, but it's recommended that you build your extension using ESM.

For about a year I have used CommonJS modules and vanilla JavaScript in my extensions. While it worked, the benefits of using TypeScript and ESM are huge. Converting an existing project to use them is a pain and that's why I recommend that you start with them from the beginning.

<br/>

## Folder Structure
If you are coming from scripting, know:
* You write most of your code inside `/src`.
* Never just open `/src` in VSCode, always open the root of the project.
* The main TS file is `/src/index.ts`. This is where you start writing your code.
* Use `/public` to store [static files](https://vitejs.dev/guide/assets.html) that you want to be copied to the build folder.
* Inside `/src` you can use any folder structure you want. It's important that you don't move the `/CSXS` folder.
* The `/dist` folder is where your extension gets built. Don't touch it.
* The `node_modules` folder is where all your dependencies get installed. In a healthy project, this folder can always be deleted and recreated by running `npm install`. 

Not required, but recommended:
* Use `/src/lib` to store your own libraries and utilities.
* Use `/src/User` to store user related modules (such as user settings, user authentication, etc.)



<br/>
<br/>
<br/>

# Abstractions
## Signing
Typically signing your extension is a manual process that involves a lot of steps. This template uses my plugin [rollup-plugin-zxp](https://www.npmjs.com/package/rollup-plugin-zxp) to automate this process. It hides a lot of the complexity behind the process. Read more about it in the plugin's readme if you need more control over the signing process.

## index.html and index-dev.html
You may notice we have both an `index.html` file and an `index-dev.html` file. The dev version redirects the host Adobe app to the local server during development.
In our `CSXS.manifest.xml` file we mention `index-dev.html` as our `MainPath`.

This template uses my plugin [rollup-plugin-bundle-cep-manifest
](https://www.npmjs.com/package/rollup-plugin-bundle-cep-manifest) to automatically bundle our CSXS folder. It will automatically replace `index-dev.html` with `index.html` when building for production.

Notice that if you want to use your own naming convention for your html files, the plugin might not be able to resolve the correct file. In that case, head over to the [plugin's readme](https://www.npmjs.com/package/rollup-plugin-bundle-cep-manifest#automatic) to learn how to configure it manually.

<br/>
<br/>
<br/>

# The Future?
`CSInterface` and `manifest.xml` are files provided by Adobe. Future versions of CEP may deprecate them in the future.



# Not sure where to start?
If you are new to CEP, I wrote a little [opinionated guide](https://github.com/GoodBoyNinja/Your-First-CEP-Panel) on what to learn first.
