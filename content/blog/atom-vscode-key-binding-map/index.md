---
title: Atom & VSCode Key Binding Map & Configurations
date: "2019-01-28"
description: Gonna learn this VSCode thing all the kids are talking about so I made a map of key bindings to reference.
keywords: ["atom", "vscode", "key binding"]
---

![Atom VSCode Key Binding Map](/jared-nielsen-atom-vscode-key-binding-map.png)

Gonna learn this VSCode thing all the kids are talking about so I made a map of key bindings to reference plus some basic config stuff. I hope you find it useful. It's a work-in-progress, so if you find any errors or omissions, let me know [@jarednielsen](https://twitter.com/jarednielsen)

## Frequently Used Keyboard Shortcuts

| Command                | Atom Apple         | Atom Windows/Linux    | VSCode Apple   | VSCode Windows/Linux |
| -------                | -------            | -------               |     -----      | ----------           |
| Preferences/Settings   | `cmd-,`            | `ctrl-,`              | `cmd-,`        | `ctrl-,`             |
| Command Palette        | `shift-cmd-p`      | `shift-ctrl-p`        | `shift-cmd-p`  | `shift-ctrl-p`       |
| Open File (Fuzzy)      | `cmd-p` or `cmd-t` | `ctrl-p` or `ctrl-t`  | `cmd-p`        | `ctrl-p`             |
| Browse Open Files      | `cmd-b`            | `ctrl-b`              | ?              | ?                    |
| Markdown Preview       | `ctrl-shift-m`     | `ctrl-shift-m`        | `shift-cmd-v`  | `ctrl-shift-v`       |
| Toggle Tree View       | `cmd-\ `           | `ctrl-\ `              | `cmd-b`       | `ctrl-b`             |
| Toggle Developer Tools | `opt-cmd-i`        | `ctrl-alt-i`          | ?              | ?                    |
| Key Binding Resolver   | `cmd-.`            | `ctrl-.`              | `cmd-k cmd-s`  | `ctrl-k` then `s`    |  

## Window & File Management
| Command             | Atom Apple         | Atom Windows/Linux    | VSCode Apple   | VSCode Windows/Linux |
| -------             | -------            | -------               |     -----      | ----------           |
| New File            | `cmd-n`            | `ctrl-n`              | `cmd-n`        | `ctrl-n`             |
| New Window          | `shift-cmd-n`      | `ctrl-shift-n`        | `cmd-shift-n`  | `ctrl-shift-n`       |
| Open                | `cmd-o`            | `ctrl-o`              | `cmd-o`        | `ctrl-o`             |
| Open Folder         | `cmd-shift-o`      | `ctrl-shift-o`        | ?              | ?                    |
| Save                | `cmd-s`            | `ctrl-s`              | `cmd-s`        | `ctrl-s`             |
| Save As             | `shift-cmd-s`      | `ctrl-shift-s`        | `cmd-shift-s`  | `ctrl-shift-s`       |
| Save All            | `alt-cmd-s`        |                       | `cmd-opt-s`    | ?                    |
| Close Tab           | `cmd-w`            | `ctrl-w`              | `cmd-w`        | `ctrl-w`             |
| Close Window        | `shift-cmd-w`      | `ctrl-shift-w`        | `cmd-w`        | `ctrl-shift-w`       |
| Split Window        | `cmd-k` then `up/down/left/right`| `ctrl-k` then `up/down/left/right`| `cmd-\ `| `ctrl-\ `|
| Focus Pane          | `cmd-k cmd-up/down/left/right`| `ctrl-k ctrl-up/down/left/right`| `cmd-k cmd-left/right`| `ctrl-k` then `left/right`|
| Toggle full screen  | `ctrl-cmd-f`       | `F11`                 | `ctrl-cmd-f`   | `F11`                |
| Reveal Current File in Tree|`cmd-shift-\ `|                      | `cmd-k r`      | `ctrl-k r`           |
| Cycle Tabs          | `cmd-Shift-[` & `cmd-Shift-]`| `ctrl-Shift-[` & `ctrl-Shift-]`| `ctrl-shift-m tab`| `ctrl-m tab`|

## Editing
| Command               | Atom Apple          | Atom Windows/Linux    | VSCode Apple           | VSCode Windows/Linux    |
| -------               | -------             | -------               | -------                | -------                 |
| Duplicate Lines       | `shift-cmd-d`       | `ctrl-shift-d`        | `opt-shift-up/down`    | `ctrl+c` (empty selection)|
| Delete Line           | `ctrl-shift-k`      | `ctrl-shift-k`        | `cmd-shift-k`          | `ctrl-shift-k`          |
| Move Line Up          | `ctrl-cmd-up`       | `ctrl-up`             | `opt-up`               | `alt-up`                |
| Move Line Down        | `ctrl-cmd-down`     | `ctrl-down`           | `opt-down`             | `alt-down`              |
| Find/Replace          | `cmd-f`             | `ctrl-f`              | `cmd-f`                | `ctrl-f`                |
| Find Next             | `cmd-g`             | `F3`                  | `cmd-g`                | `F3`                    |
| Find Previous         | `shift-cmd-g`       | `shift-F3`            | `shift-cmd-g`          | `shift-F3`              |
| Find in Project       | `shift-cmd-f`       | `ctrl-shift-f`        | `cmd-shift-f`          | `ctrl-shift-f`          |
| Go To Line            | `ctrl-g`            | `ctrl-g`              | `ctrl-g`               | `ctrl-g`                |
| Go To Matching Bracket| `ctrl-m`            | `ctrl-m`              | `shift-cmd-\ `         | `ctrl-shift-\ `         |
| Select Line           | `cmd-l`             | `ctrl-l`              | `cmd-i`                | `ctrl-i`                |
| Toggle Comment        | `cmd-/`             | `ctrl-/`              | `ctrl-/`               | `ctrl-/`                |
| Column Selection      | `ctrl-shift-up/down`| `ctrl-alt-up/down`    | `shift-opt-cmd-up/down`| `shift-alt-up/down` OR `ctrl-shift-up/down`|
| Select Same Words     | `cmd-d`             | `ctrl-d`              | `cmd-F2`               | `ctrl-F2`               |
| Undo Selection        | `cmd-u`             | `ctrl-u`              | `cmd-u`                | `ctrl-u`                |
| Select All The Same Words At Once | `cmd-ctrl-g`| `alt-F3`          | ?                      | ?                       |
| Show Symbols Palette  | `cmd-r`             | `ctrl-r`              | `cmd-t`                | `ctrl-t`                |
| Show auto-completions | `ctrl-space`        | `ctrl-space`          | ?                      | ?                       |
| Fold/Unfold sections of code | `option-cmd-[` & `option-cmd-]`| `ctrl-shift-[` & `ctrl-shift-]`| `option-cmd-[` & `option-cmd-]`| `ctrl-shift-[` & `ctrl-shift-]`|
| Open Link             | `ctrl-shift-o`      | ?                     | ?                      | ?                       |


## Opening Files from the Command Line

### Atom
To open a single file:
`atom <file-name>`

To open a directory:
`atom .`

### VSCode
Open Visual Studio Code and access the Command Palette (`shift-cmd-p`). Search for and select `Shell Command: Install ‘code’ command in PATH`.

To open a single file:
`code <file-name>`

To open a directory:
`code .`

## Opening Files from IDE in Browser

### Atom
[Install open-in-browser](https://atom.io/packages/open-in-browser)

### VSCode
[Install open-in-browser](https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser)

## Opening Terminal in IDE

### Atom

Install [terminal-plus](https://atom.io/packages/terminal-plus)

Apple
`cmd-shift-t`

Windows/Linux:
`ctrl-shift-t`

OR

Packages > Terminal-Plus > New Terminal

OR

Click the + icon in the lower-left of your panel

### VSCode

``ctrl-` ``

OR

View > Integrated Terminal

## Packages

### Atom
@TODO

### VSCode
@TODO

#### To Install Packages in VSCode

Open command pallete:

`ctrl + p`

Then paste in the installation command.

## (Re)Sources
* [nwinkler/atom-keyboard-shortcuts](https://github.com/nwinkler/atom-keyboard-shortcuts/blob/master/README.md)
* [VSCode Keyboard shortcuts Apple](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
* [VSCode Keyboard shortcuts Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
* https://gist.github.com/chrissimpkins/5bf5686bae86b8129bee
