const vscode = require('vscode');

function activate(context) {
    const extensionID = 'jigar-patel.OdooSnippets';
    const VscOdooSnippets = vscode.extensions.getExtension(extensionID);
    const VscOdooSnippetsVersion = VscOdooSnippets.packageJSON.version;
    const previousVersion = context.globalState.get('OdooSnippetsVersion');

    showMessage(VscOdooSnippetsVersion, previousVersion);

    context.globalState.update('OdooSnippetsVersion', VscOdooSnippetsVersion);
}

async function showMessage(version, previousVersion) {
    if (previousVersion === undefined) {
        console.log('VscOdooSnippets first-time install');
        return;
    }

    if (previousVersion !== version) {
        console.log(`VscOdooSnippets upgraded from v${previousVersion} to v${version}`);

        const actions = [{ title: "What's New" }, { title: 'Website' }];
        const result = await vscode.window.showInformationMessage(`VscOdooSnippets has been updated to v${version} — check out what's new!`, ...actions);

        if (result != null) {
            if (result === actions[0]) {
                await vscode.env.openExternal(vscode.Uri.parse('https://github.com/Droggol/VscOdooSnippets/blob/master/CHANGELOG.md'));
            } else if (result === actions[1]) {
                await vscode.env.openExternal(vscode.Uri.parse('https://www.droggol.com/odoo-tools'));
            }
        }
    }
}

exports.activate = activate;

function deactivate() { }

module.exports = {
    activate,
    deactivate
}
