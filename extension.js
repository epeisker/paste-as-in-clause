// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// The module 'azdata' contains the Azure Data Studio extensibility API
// This is a complementary set of APIs that add SQL / Data-specific functionality to the app
// Import the module and reference it with the alias azdata in your code below

// Note: uncomment when you want to use Azure Data Studio APIs. Commenting now to avoid strict linting issues
//const azdata = require('azdata');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('paste-as-in-clause.paste', () => {
        vscode.env.clipboard.readText()
        .then((content)=>{
            var editor = vscode.window.activeTextEditor
            if (editor) {
                var cloneContent = content.slice()
                if(!cloneContent.match(/\((.*),?\)/)){
                    //split windows-style line endings
                    var tokens = cloneContent.split('\r\n')
                    tokens = tokens.filter((token)=>{return token!=null && token!=''})
                    editor.edit(editBuilder => {
                        editBuilder.insert(editor.selection.active, 
                            '('+tokens.map(value => isNaN(Number(value)) ? '\'' + value + '\'' : value).join() +')');
                    })
                } else{
                    //already formatted as a list
                    editor.edit(editBuilder => {
                        editBuilder.insert(editor.selection.active, cloneContent);
                    })
                }       				
            }
        })
    })
);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;