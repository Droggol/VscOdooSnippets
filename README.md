<h1 align="center">
    <a href="https://marketplace.visualstudio.com/items?itemName=jigar-patel.OdooSnippets">
        <img src="https://raw.githubusercontent.com/droggol/VscOdooSnippets/master/images/icon.png"/>
    </a>
    <div>Odoo Snippets</div>
    <div style="margin: 0.3em auto;">
        <a href="https://marketplace.visualstudio.com/items?itemName=jigar-patel.OdooSnippets">
            <img src="https://img.shields.io/visual-studio-marketplace/v/jigar-patel.OdooSnippets.svg?label=Version&color=875A7B" alt="Version"/>
        </a>
        <a href="https://marketplace.visualstudio.com/items?itemName=jigar-patel.OdooSnippets">
            <img src="https://img.shields.io/visual-studio-marketplace/i/jigar-patel.OdooSnippets.svg?label=Installs&color=875A7B" alt="Installs"/>
        </a>
        <a href="https://marketplace.visualstudio.com/items?itemName=jigar-patel.OdooSnippets">
            <img src="https://img.shields.io/visual-studio-marketplace/d/jigar-patel.OdooSnippets.svg?label=Downloads&color=875A7B" alt="Downloads"/>
        </a>
        <a href="https://marketplace.visualstudio.com/items?itemName=jigar-patel.OdooSnippets&ssr=false#review-details">
            <img src="https://img.shields.io/visual-studio-marketplace/r/jigar-patel.OdooSnippets.svg?label=Rating&color=875A7B" alt="Ratings"/>
        </a>
    </div>
</h1>

This extension contains predefined code snippets for [Odoo](https://www.odoo.com/) developer. Snippets are available for following supported languages (file extensions):
* Python (`.py`)
* Javascript (`.js`)
* XML (`.xml`)

All snippets follow the [Odoo Guidelines](https://www.odoo.com/documentation/13.0/reference/guidelines.html).

## Installation

Launch VS Code. Press `Ctrl+P` or `Command+P` (for Mac). Paste command `ext install jigar-patel.OdooSnippets` and press `Enter`.

## How to use?

Most snippets prefixed with `oo`. For example if you want to add `create` CRUD method then type `oocreate`.

<img src="https://raw.githubusercontent.com/droggol/VscOdooSnippets/master/images/demo.gif" width="624" height="544"/>

## Documentation

#### Python (`.py`)

##### Prefixed with `oo`
Prefix | Purpose
------------ | -------------
manifest | Add manifest json
import | Add an import
fimport | Add an import from
model | Add model
fchar | Add char field
ftext | Add text field
fhtml | Add html field
fboolean | Add boolean field
finteger | Add integer field
ffloat | Add float field
fselection | Add selection field
fdate | Add date field
fdatetime | Add dateTime field
fbinary | Add binary field
fmonetary | Add monetary field
fmany2one | Add many2one field
fone2many | Add one2many field
fmany2many | Add many2many field
fcompute | Add compute field
fcomputei | Add compute field with inverse method
fonchange | Add onchange field
fconstrains | Add constrains on field
create | Add create method
write | Add write method
unlink | Add unlink method

#### Javascript (`.js`)

##### Prefixed with `oo`
Prefix | Purpose
------------ | -------------
define | Defining a module
widget | Add widget
super | Add super statement
rpc | Add rpc call
rpc_route | Add route rpc call
dialog | Add dialog widget
alert | Add alert dialog
confirm | Add confirm dialog

#### XML (`.xml`)

Prefix | Purpose
------------ | -------------
`<odoo>` | Add Odoo namespace
`<menuitem>` | Add root menu
`<menuitem>` | Add sub menu
`<form>` | Add form view
`<list>` | Add list view
`<kanban>` | Add kanban view
`<search>` | Add search view
`<calendar>` | Add calendar view
`<cohort>` | Add cohort view
`<gantt>` | Add gantt view
`<graph>` | Add graph view
`<pivot>` | Add pivot view
`<activity>` | Add activity view
`<qweb>` | Add qweb view
`<viewInherit>` | Add inherited view
`<buttonHeader>` | Add button in form view header
`<buttonBox>` | Add stat button container in form view
`<buttonStat>` | Add stat button in form view
`<field>` | Add field tag
`<notebook>` | Add a notebook
`<page>` | Add a notebook page
`<chatter>` | Add chatter
`<action>` | Add an action
`<actionView>` | Add view in action
`<actionServer>` | Add server action
`<actionUrl>` | Add URL action
`<actionClient>` | Add client action
`<actionReport>` | Add report action
`<report>` | Add report template
`<cron>` | Add cron job
`<record>` | Add record
`<function>` | Add function
`<template>` | Add template
`<templateInherit>` | Add inherited template
`<xpath>` | Add xpath
`<xpathAttr>` | Add xpath to attributes
`<script>` | Add script tag
`<link>` | Add link tag
`<assetsBackend>` | Add backend assets
`<assetsFrontend>` | Add frontend assets

#### Qweb

Prefix | Purpose
------------ | -------------
`<t-if>` | Add if condition
`<t-if-else>` | Add if-else condition
`<t-foreach>` | Add foreach loop
`<t-set>` | Add variable
`<t-att>` | Add attribute
`<t-attf>` | Add attribute with format value
`<t-esc>` | Evaluate expression
`<t-raw>` | Evaluate html content
`<t-call>` | Call other template
`<t-debug>` | Invokes a debugger
`<t-log>` | Log the expression result

## Contributing
If you'd like to report an issue or help contribute to this visual studio code extension, please visit the repository on Github.

- [Repository](https://github.com/droggol/VscOdooSnippets)
- [Issues](https://github.com/droggol/VscOdooSnippets/issues)

#### Thanks to all the people who already contributed!
<a href="https://github.com/droggol/VscOdooSnippets/graphs/contributors">
    <img src="https://contributors-img.firebaseapp.com/image?repo=droggol/VscOdooSnippets"/>
</a>

## Release Notes

Detailed release notes are available [here](CHANGELOG.md).

## License

Code licensed under [MIT](LICENSE).

<a href="https://www.droggol.com">
    <img src="https://raw.githubusercontent.com/droggol/VscOdooSnippets/master/images/droggol_logo.png" width="128" height="56"/>
</a>
