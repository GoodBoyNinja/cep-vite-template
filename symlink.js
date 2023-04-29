

import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import * as child_process from 'child_process';
import prompt from 'prompt-sync';

const messages = {
    winSymlinkDevError: `--------------------------\nGOOD BOY NINJA SAYS:\nTo successfully create a symlink on windows, make sure you are running VSCode as admin (right click on the icon and select "Run as administrator") or turn on developer mode in windows settings, then try again.\n--------------------------`
};


const isMacOS = os.platform() === 'darwin';

let args = process.argv.slice(2);
let unlink = args.includes('--unlink') || args.includes('unlink');
let open = args.includes('--open') || args.includes('open');
let override = args.includes('--override') || args.includes('override');

// dirs
let __dirname = path.resolve();
const PROJECT_NAME = path.basename(path.join(__dirname, './'));
const CEP_FOLDER = isMacOS ? path.join(os.homedir(), 'Library/Application Support/Adobe/CEP/extensions') : path.join(os.homedir(), 'AppData/Roaming/Adobe/CEP/extensions');
const EXTENSION_FOLDER = __dirname;
const EXTENSION_NAME = `com.${PROJECT_NAME.toLowerCase()}.extension`;
const EXTENSION_SYMLINK = path.join(CEP_FOLDER, EXTENSION_NAME);



if (unlink) {
    symlink_unlink();
} else if (symlink_validate()) {
    symlink_link();
}
if (open) {
    openFolder();
}



function symlink_unlink() {
    try {
        fs.unlinkSync(EXTENSION_SYMLINK);
        console.log(`Symlink removed successfully!`);
    } catch (e) {
        console.log(`Error removing symlink: ${e}`);
    }
}
function symlink_link() {
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



}

function symlink_validate() {
    // if the synlink exists, ask the user if they want to remove it and recreate it

    if (override) {
        symlink_unlink();
    }

    if (fs.existsSync(EXTENSION_SYMLINK)) {
        console.log(`\nERROR:\nA symlink already exists at "${EXTENSION_SYMLINK}"\n If you are sure you want to override this folder, please run: "node symlink --override"`);
        return false;
    }

    return true;


}

function openFolder() {
    if (fs.existsSync(EXTENSION_SYMLINK)) {
        console.log('Opening folder: ', EXTENSION_SYMLINK);
        openExplorerin(EXTENSION_SYMLINK, (err) => {
            if (err) {
                console.log('Error opening folder: ', err);
            }
        });
    }

}

function openExplorerin(path, callback) {
    var cmd = ``;
    switch (os.platform().toLowerCase().replace(/[0-9]/g, ``).replace(`darwin`, `macos`)) {
        case `win`:
            path = path || '=';
            cmd = `explorer`;
            break;
        case `linux`:
            path = path || '/';
            cmd = `xdg-open`;
            break;
        case `macos`:
            path = path || '/';
            cmd = `open`;
            break;
    }
    let p = child_process.spawn(cmd, [path]);
    p.on('error', (err) => {
        p.kill();
        return callback(err);
    });
}