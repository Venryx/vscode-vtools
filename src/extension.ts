"use strict";
import * as vscode from "vscode";
import { TextEditorSelectionChangeKind } from "vscode";

export function activate(context: vscode.ExtensionContext) {
	if (vscode.workspace.getConfiguration("vtools").autoHideSideBar) {
		vscode.window.onDidChangeTextEditorSelection(selection => {
			if (selection.kind != TextEditorSelectionChangeKind.Mouse || selection.selections.length == 0) return;
			if (selection.selections.find(a => a.isEmpty) == null) return;
			setTimeout(function () {
				//vscode.commands.executeCommand("workbench.files.action.focusFilesExplorer");
				vscode.commands.executeCommand("workbench.extensions.action.showInstalledExtensions");
				vscode.commands.executeCommand("workbench.action.toggleSidebarVisibility");
			}, 150);
		});
	}
}
export function deactivate() {
}