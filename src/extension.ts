"use strict";
import * as vscode from "vscode";
import { TextEditorSelectionChangeKind } from "vscode";

var lastSelectionTime = -1;

export function activate(context: vscode.ExtensionContext) {
	if (vscode.workspace.getConfiguration("vtools").autoHideSideBar) {
		vscode.window.onDidChangeTextEditorSelection(selection=> {
			// if selection was not from a click, or if there are no selections, return
			if (selection.kind != TextEditorSelectionChangeKind.Mouse || selection.selections.length == 0) return;

			// if at least one editor's selection is a single-position (ie. not a segment of text), perform the side-bar hiding
			var singlePos = selection.selections.find(a=>a.isEmpty) != null;
			var thisSelectionTime = Date.now();
			if (singlePos) {
				setTimeout(function () {
					// if the selection changed during the delay-time, cancel the side-bar hiding
					if (lastSelectionTime != thisSelectionTime) return;

					//vscode.commands.executeCommand("workbench.files.action.focusFilesExplorer");
					vscode.commands.executeCommand("workbench.extensions.action.showInstalledExtensions");
					vscode.commands.executeCommand("workbench.action.toggleSidebarVisibility");
				}, vscode.workspace.getConfiguration("vtools").autoHideDelay);
			}
			lastSelectionTime = thisSelectionTime;
		});
	}

	if (vscode.workspace.getConfiguration("vtools").autoHideOutput) {
		vscode.window.onDidChangeTextEditorSelection(selection=> {
			// if selection was not from a click, or if there are no selections, return
			if (selection.kind != TextEditorSelectionChangeKind.Mouse || selection.selections.length == 0) return;

			// if at least one editor's selection is a single-position (ie. not a segment of text), perform the side-bar hiding
			var singlePos = selection.selections.find(a=>a.isEmpty) != null;
			var thisSelectionTime = Date.now();
			if (singlePos) {
				setTimeout(function () {
					// if the selection changed during the delay-time, cancel the side-bar hiding
					if (lastSelectionTime != thisSelectionTime) return;

					//vscode.commands.executeCommand("workbench.files.action.focusFilesExplorer");
					vscode.commands.executeCommand("workbench.action.terminal.focus");
					vscode.commands.executeCommand("workbench.action.terminal.toggleTerminal");
				}, vscode.workspace.getConfiguration("vtools").autoHideDelay);
			}
			lastSelectionTime = thisSelectionTime;
		});
	}
}
export function deactivate() {
}