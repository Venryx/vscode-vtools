# VTools for Visual Studio Code

Extension install page: <https://marketplace.visualstudio.com/items?itemName=venryx.vscode-vtools>

## Features

### Auto-hide side-bar/Output
Causes the side-bar and/or output windows to be hidden whenever the user clicks outside of it. (technically, when the user changes the text-editor selection)

![Auto-hide side-bar](Images/Features/AutoHideSideBar.gif)

## Settings

* `vtools.autoHideSideBar`: Causes the side-bar to be hidden whenever the user clicks outside of it. [boolean, default: `false`]
* `vtools.autoHideOutput`: Causes the problems/output/debug consol/terminal window to be hidden whenever the user clicks outside of it. [boolean, default: `false`]
* `vtools.autoHideDelay`: How long to wait (after the user clicks outside of the side-bar) before hiding the side-bar. (helps solve the unintended-selection issue -- especially when scrolled to the right) [number, default: `300`]