# 🌼  CEP-Vite-Template
### A lo-fi starting point for your extension
Better use [BOLT-CEP](https://github.com/hyperbrew/bolt-cep) if you are:
1. Already comfortable with **web development** and want to get started with CEP quickly.
2. Already using frameworks like React, Vue or Svelte and want to use them in your extension.

Otherwise, you might find this setup more suitable for your current skillset.

Also you might ask yourself: [Why do I need a template?](/.github/why.md)

<br>

# Getting started

## Setup your machine (Only once per machine)
1. you need to enable  [PlayerDebugMode](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_8.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#debugging-unsigned-extensions) on your machine.
2. If you are using Windows, save yourself some headache and configure VSCode to always run as administrator. (Right click on VSCode > Properties > Compatibility > Run this program as administrator)

## Setup your new extension (Only once)

1. [Clone this repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop) to your local machine and open the folder in VSCode.
2. Open a terminal and run `npm install` to install all dependencies.
3. From the same terminal, run `node symlink` to symlink the extension folder to your CEP extensions folder.
4. Search & Replace all instances of:
    - `com.developername.toolname.panel` with your extension ID (For example: `com.goodboyninja.skew.panel`)
    - `%TOOLNAME%` with your extension name (For example: `Skew`)

5. in `/CSXS/manifest.xml` you will find a commented list of apps that your extension supports. Uncomment the ones you want to support (By default we support After-Effects 22.0 and later).
6. Restart your Adobe app so it can find the symlinked extension for the first time.

Now that everything is set up, follow the steps below to start developing your extension.

## Start coding (every time you open your project in VSCode)
1. With your project open in VSCode, open a terminal and run `npm run dev` to start the dev server.
3. Open your Adobe app and go to `Window > Extensions > Your extension name` to open your extension.

> Note: If Vite launches the dev server on a port other than `5173` you will have to go to `/index-dev.html` and change the port number to match the one vite is using.

That's it!
Head down to `src/index.ts` to write your first lines of code. Every time you save a file, Vite will automatically reload your extension in the Adobe app.





<br/>
<br/>

# Building your extension (creates a .zxp file)
> Building is as easy as running `npm run build` in the terminal.

This will create a `.zxp` file in `/dist/%TOOLNAME%.zxp`.



However, creating a `.zxp` file involves a process called [code signing](https://en.wikipedia.org/wiki/Code_signing). For this to work, you need to fill in some details first:

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


If you've done everything correctly, you should now be able to open a terminal in VSCode and run `npm run build` to build your extension.


## Choosing a safe place for your builds

⚠️The contents of the `/dist` folder are rewritten every time you run `npm run build`.

If you are releasing your `.zxp` file to the public (are just want to keep it safe) you should move it somewhere else, such as `/zxp/%VERSION%` (note: this folder is **not** ignored by git).

<br>

## Testing your build
1. Run `node symlink --dist --override`. This will remove our previous symlink and create a new one, but this time using the **dist** folder.
2. Restart your Adobe app and open your extension. If everything went well, you should see your extension running with the latest build.

When you want to go back to development mode, run `node symlink --override` to override the symlink with the root folder, and restart your Adobe app.


## Testing your ZXP file
Generally speaking, there shouldn't be any difference between the symlinked version and the ZXP version. However, before releasing your extension, it's a good idea to test your ZXP file to make sure it works as expected.

1. Run `node symlink --unlink` to remove our symlink.
2. install your `.zxp` using the ZXP installer, or [manually](https://motionbro.net/help/extension-troubleshooting/how-to-install-an-extension-for-adobe-without-creative-cloud-app/#manual-installation).



⚠️ Don't skip unlinking! ZXP installer may try to override our symlinked folder, and by doing that, delete our actual working files. 







<br/>
<br/>
<br/>

# ❗Use GitHub, backup often
Unlike scripts, extensions can grow big quite easily. Please use git and github and sync often. Dropbox, or other backup solutions can be life savers.

<br/>
<br/>
<br/>



# Development tips
Learn how to use this template to its full potential:

- [Using TypeScript and ES Modules](/.github/technologies.md)
- [Including entire JSX (ExtendScript) files](/.github/extendscript.md)
- [Adding Icons](/.github/icons.md)
- [Debugging](/.github/debugging.md) (Using the console and the debugger while developing)
- [Folder Structure](/.github/structure.md)
- [All available symlink options (and what the hell is a symlink anyway?)](/.github/symlink.md)
- [Exclude irrelevant files from VSCode search](/.github/vscode.md)

You may also be wondering about:
- [What's the deal with index-dev.html and index.html?](/.github/indexdev.md)
- [How does this template handle signing my extension?](/.github/signing.md)






<br/>
<br/>
<br/>

# Not sure where to start?
If you are new to CEP, I wrote a little [opinionated guide](https://github.com/GoodBoyNinja/Your-First-CEP-Panel) on what to learn first.

<br/>
<br/>
<br/>

---
* `CSInterface` and `manifest.xml` are files provided by Adobe. Future versions of CEP may deprecate them in the future.
