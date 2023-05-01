## Symlink
We use symlink to mirror our project folder inside the Adobe app's extensions folder. This way we can develop our extension wherever we want, while the Adobe app can still access it.
This template uses a custom node script in the root, `/symlink.js`.
To symlink:
* `node symlink` - Creates the symlink of the project folder inside the Adobe app's extensions folder.

You can pass the following arguments:
* `--dist` - Creates the symlink of the **dist** folder inside the Adobe app's extensions folder.
* `--open` - Creates the symlink and opens the new folder in Finder/Explorer.
* `--unlink` - Removes any previous symlinks.

Example with arguments:
* `node symlink --dist --open` - Creates the symlink of the **dist** folder inside the Adobe app's extensions folder and opens the new folder in Finder/Explorer.


<br>

# Wait, what is a symlink?
Symlink is like a live shortcut. It's a way to tell the OS that a certain folder is actually located somewhere else.

We are using it to fool the Adobe app into thinking that our extension is located inside its extensions folder, while in reality it's located somewhere else.
This way we can develop our extension wherever we want, while the Adobe app can still access it.

I find symlink to be a little dangerous to work with, so please watch your files, backup often, use git and github.