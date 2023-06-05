# Paste As IN Clause README
Simple extension for Azure Data Studio that pastes the clipboard values as a SQL IN clause value list.

## Features

- Adds a command and context menu to paste a selection of lines as a list of values for the IN clause
- Also works with grid selection

## Instructions

This extension was scaffoled with yeoman code generator and built with vsce.

To build from source:

```bash
# if you do not already have vsce installed
npm install -g vsce

# then execute vsce package inside the root directory of this cloned repo
cd \source\paste-as-in-clause
vsce package
```
Then from vscode extension menu, select options > "install from VSIX..."
