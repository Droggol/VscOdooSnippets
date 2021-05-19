import * as vscode from 'vscode';

const jsSnippetsFile = require('../snippets/js-snippets.json');
const pythonSnippetsFile = require('../snippets/python-snippets.json');
const xmlSnippetsFile = require('../snippets/xml-snippets.json');

type Snippet = {
    body: Array<string> | string
    description: string
    prefix: Array<string> | string
};

const convertSnippetArrayToString = (snippetArray: Array<string>): string => snippetArray.join('\n');


export async function activate(context: vscode.ExtensionContext) {
    // Version Notification
    const extensionID = 'jigar-patel.OdooSnippets';
    const VscOdooSnippets:any = vscode.extensions.getExtension(extensionID);
    const VscOdooSnippetsVersion = VscOdooSnippets.packageJSON.version;
    const previousVersion = context.globalState.get('OdooSnippetsVersion');
    if (previousVersion === undefined) {
        console.log('VscOdooSnippets first-time install');
        return;
    }
    if (previousVersion !== VscOdooSnippetsVersion) {
        console.log(`VscOdooSnippets upgraded from v${previousVersion} to v${VscOdooSnippetsVersion}`);

        const actions = [{ title: "What's New" }, { title: 'Website' }];
        const result = await vscode.window.showInformationMessage(`VscOdooSnippets has been updated to v${VscOdooSnippetsVersion} — check out what's new!`, ...actions);

        if (result != null) {
            if (result === actions[0]) {
                await vscode.env.openExternal(vscode.Uri.parse('https://github.com/Droggol/VscOdooSnippets/blob/master/CHANGELOG.md'));
            } else if (result === actions[1]) {
                await vscode.env.openExternal(vscode.Uri.parse('https://www.droggol.com/odoo-tools'));
            }
        }
    }
    context.globalState.update('OdooSnippetsVersion', VscOdooSnippetsVersion);

    // Snippets Search
    const disposable = vscode.commands.registerCommand(
        'extension.snippetSearch',
        async () => {
            const jsSnippets = Object.entries(jsSnippetsFile as Array<Snippet>);
            const pythonSnippets = Object.entries(pythonSnippetsFile as Array<Snippet>);
            const xmlSnippets = Object.entries(xmlSnippetsFile as Array<Snippet>);

            const snippetsArray: Array<[string, Snippet]> = jsSnippets.concat(
                pythonSnippets, xmlSnippets
            );

            const items = snippetsArray.map(([shortDescription, { prefix, body, description }], index) => {
                const value = typeof prefix === 'string' ? prefix : prefix[0]
                return {
                    id: index,
                    description: description || shortDescription,
                    label: value,
                    value,
                    body,
                };
            });

            const options = {
                matchOnDescription: true,
                matchOnDetail: true,
                placeHolder: 'Search Snippet',
            };

            const snippet = (await vscode.window.showQuickPick(items, options)) || { body: ''};
            const activeTextEditor = vscode.window.activeTextEditor;
            const body = typeof snippet.body === 'string' ? snippet.body : convertSnippetArrayToString(snippet.body);
            activeTextEditor && activeTextEditor.insertSnippet(new vscode.SnippetString(body));
        }
    )
    context.subscriptions.push(disposable);
}

export function deactivate() {}
