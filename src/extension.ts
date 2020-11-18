"use strict";
import * as vscode from "vscode";
import { TextEditorSelectionChangeKind } from "vscode";

var lastSelectionTime = -1;

export function activate(context: vscode.ExtensionContext) {
	let config = vscode.workspace.getConfiguration("vtools");
	if (config.autoHideSideBar || config.autoHideBottomBar) {
		vscode.window.onDidChangeTextEditorSelection(selection=> {
			// if selection was not from a click, or if there are no selections, return
			if (selection.kind != TextEditorSelectionChangeKind.Mouse || selection.selections.length == 0) return;

			// if at least one editor's selection is a single-position (ie. not a segment of text), perform the bar hiding
			var singlePos = selection.selections.find(a=>a.isEmpty) != null;
			var thisSelectionTime = Date.now();
			if (singlePos) {
				setTimeout(function() {
					// if the selection changed during the delay-time, cancel the bar hiding
					if (lastSelectionTime != thisSelectionTime) return;

					if (config.autoHideSideBar) {
						/*vscode.commands.executeCommand("workbench.action.focusSideBar");
						vscode.commands.executeCommand("workbench.action.toggleSidebarVisibility");*/
						vscode.commands.executeCommand("workbench.action.closeSidebar");
					}

					let path = vscode.window.activeTextEditor.document.fileName;
					let pathIsFile = path.includes(".") || path.includes("\\") || path.includes("/");
					if (config.autoHideBottomBar && pathIsFile) {
						/*vscode.commands.executeCommand("workbench.action.focusPanel");
						vscode.commands.executeCommand("workbench.action.togglePanel");*/
						vscode.commands.executeCommand("workbench.action.closePanel");
					}
				}, vscode.workspace.getConfiguration("vtools").autoHideDelay);
			}
			lastSelectionTime = thisSelectionTime;
		});
	}
}
export function deactivate() {}