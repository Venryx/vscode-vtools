# VTools for Visual Studio Code

Extension install page: <https://marketplace.visualstudio.com/items?itemName=venryx.vscode-vtools>

## Features

### Auto-hide side-bar
Causes the side-bar to be hidden whenever the user clicks outside of it. (technically, when the user changes the text-editor selection)

![Auto-hide side-bar](Images/Features/AutoHideSideBar.gif)

### Auto-hide bottom-bar
Same thing as above, except for the bottom-bar (output, terminal, etc.).

## Settings

* `vtools.autoHideSideBar`: Causes the side-bar to be hidden whenever the user clicks outside of it. [boolean, default: `false`]
* `vtools.autoHideBottomBar`: Causes the bottom-bar (output, terminal, etc.) to be hidden whenever the user clicks outside of it. [boolean, default: `false`]
* `vtools.autoHideDelay`: How many milliseconds to wait before hiding the side/bottom bars, after clicking outside of them. (helps solve the unintended-selection issue -- especially when scrolled to the right) [number, default: `300`]

## Alternatives

The open-source ecosystem works best when software alternatives are easy to find.

The below are plugins providing functionalities similar to...
* **Auto-hide side-bar:** [Auto Hide](https://github.com/sirmspencer/vscode-autohide)
* **Auto-hide bottom-bar:** [Auto Hide](https://github.com/sirmspencer/vscode-autohide)

## Developing

1) Clone/download repo: https://github.com/Venryx/vscode-vtools.git
2) Make code changes in "src" folder.
3) Run "npm run compile". (this will start compiler in watch mode) [if editing in vscode, Ctrl+Shift+B also works]
4) Not sure what command to use in the command-line. In vscode, I open the Debug panel and launch the extension from there.

## Publishing

1) Increment the version number in package.json.
2) Add an entry to the changelog for the new version.
3) Run "npm publish". (this publishes to npm, and runs "vsce publish", which adds the new version to the vscode marketplace)

Note: If "vsce" doesn't exist, run "npm i -g vsce". If login not-set/invalid (or PAT expired), run "vsce login [your publisher name]", and supply a non-expired PAT.