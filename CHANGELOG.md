# Change Log

### 1.0.7
* Updated extension's sidebar/bottom-bar hiding code, to use the new "closeSidebar" and "closePanel" commands (rather than the focus-then-toggle approach).

### 1.0.6
* The auto-hiding side/bottom bar features now preserve which panel was open. (makes it not conflict with manual execution of toggleSidebarVisibility and togglePanel commands)

### 1.0.5
* Added terminal-always-focusing fix for vscode 1.28. (by jBrizzle)

### 1.0.4
* Fixed that the output and debug console windows could close when selecting text inside them.
* Fixed that a "Cannot read property 'getViews' of undefined" error would sometimes occur. (VS Code 1.15)

### 1.0.3
* Added autoHideBottomBar option. (thanks @jBrizzle!)

### 1.0.2
* Added autoHideDelay option -- which mostly solves the unintended-selection issue. (thanks @pdf!)

### 1.0.0
* Initial release.