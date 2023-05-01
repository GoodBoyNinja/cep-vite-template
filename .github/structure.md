## Folder Structure
If you are coming from scripting, know:
* You write most of your code inside `/src`.
* Never just open `/src` in VSCode, always open the root of the project.
* The main TS file is `/src/index.ts`. This is where you start writing your code.
* Use `/public` to store [static files](https://vitejs.dev/guide/assets.html) that you want to be copied to the build folder.
* Inside `/src` you can use any folder structure you want. It's important that you don't move the `/CSXS` folder.
* The `/dist` folder is where your extension gets built. 
* The `node_modules` folder is where all your dependencies get installed. In a healthy project, this folder can always be deleted and recreated by running `npm install`. 

Not required, but recommended:
* Use `/src/lib` to store your own libraries and utilities.
* Use `/src/User` to store user related modules (such as user settings, user authentication, etc.)