// nodejs. Run this script to create a symlink to your extension folder in the CEP extensions folder


const messages = {
    winSymlinkDevError: `--------------------------\nGOOD BOY NINJA SAYS:\nTo successfully create a symlink on windows, make sure you are running VSCode as admin (right click on the icon and select "Run as administrator") or turn on developer mode in windows settings, then try again.\n--------------------------`
};

import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import prompt from 'prompt-sync';
let __dirname = path.resolve();


const isMacOS = os.platform() === 'darwin';
const isWindows = os.platform() === 'win32';

// dirs
const PROJECT_NAME = path.basename(path.join(__dirname, './'));
const CEP_FOLDER = isMacOS ? path.join(os.homedir(), 'Library/Application Support/Adobe/CEP/extensions') : path.join(os.homedir(), 'AppData/Roaming/Adobe/CEP/extensions');
const EXTENSION_FOLDER = __dirname;
const EXTENSION_NAME = `com.${PROJECT_NAME.toLowerCase()}.extension`;
const EXTENSION_SYMLINK = path.join(CEP_FOLDER, EXTENSION_NAME);


// if the synlink exists, ask the user if they want to remove it and recreate it
if (fs.existsSync(EXTENSION_SYMLINK)) {
    console.log('ACTION REQUIRED: A folder already exists in this location: ', EXTENSION_SYMLINK);
    let answer = prompt(`Are you sure you want to override it with a symlink? (y/n)`);
    if (answer === 'y') {
        fs.unlinkSync(EXTENSION_SYMLINK);
    }

    if (answer === 'n') {
        console.log('SymLink has not been created. Try again.');
        // return;
    }
}

// create the symlink
try {
    fs.symlinkSync(EXTENSION_FOLDER, EXTENSION_SYMLINK);
    console.log(`
        \n---- Attempting to create symlink ----\n
    `);
    console.log(`Symlink created successfully!  A live copy of your extension is now available in the CEP extensions folder over at: "${EXTENSION_SYMLINK}"\nDon't forget to restart your Adobe app!\n`);

} catch (e) {
    console.log(messages.winSymlinkDevError);
    console.log("The following error was thrown: \n", e, "\n");
}


