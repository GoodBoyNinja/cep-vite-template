# Improve your experience of using this template with VSCode

From your root folder, create a `.vscode` folder and add a `settings.json` file with the following content:

```json
{
  "search.exclude": {
    "**/*.git": true,
    "**/*.secret": true,
    "**/*bundle.js": true,
    "**/build": true,
    "**/bundle": true,
    "**/dist": true
  }
}

```

This will hide all the files and folders you don't need to see when searching for files in VSCode.