{
    /*
   profile 
   privacy, service 
   Appearance
   accessibility
   terminal settings
   extension
  Language Settings - Formate and linting
  */

    //! Appearance
    "explorer.compactFolders": false,
    "workbench.iconTheme": "vscode-icons",
    "editor.guides.bracketPairs": true,
    "workbench.startupEditor": "none",
    "editor.cursorSmoothCaretAnimation": "on",
    "editor.fontSize": 16.5,
    "editor.fontLigatures": true,
    "editor.linkedEditing": true,
    "editor.cursorWidth": 2,
    "editor.fontFamily": "Kurale",
    // "editor.fontFamily": "OperatorMonoLig-MediumItalic",
    // "editor.fontFamily": "Fira Code",
    // "editor.fontSize": 13,
    "editor.minimap.autohide": true,
    "editor.minimap.scale": 2,
    "editor.minimap.renderCharacters": false,
    "editor.minimap.enabled": false,
    "editor.lineHeight": 1.8,
    "editor.cursorBlinking": "expand",
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
        "source.sortImports": "explicit",
        "source.fixAll": "never"
    },

    "explorer.confirmDragAndDrop": false,
    "security.workspace.trust.untrustedFiles": "open",
    "javascript.suggest.autoImports": true,
    "javascript.suggest.includeAutomaticOptionalChainCompletions": true,
    "files.autoSave": "onFocusChange",

    //! VS Code Setting
    "emmet.includeLanguages": {
        "javascript": "javascriptreact",
        "markdown": "html"
    },

    //! Terminal Settings
    "terminal.integrated.tabs.defaultColor": "terminal.ansiRed",
    "terminal.integrated.fontFamily": "'cascadia', 'Courier New', monospace",
    // "terminal.integrated.fontFamily": "MesloLGM NF",
    "terminal.integrated.fontSize": 13,
    "terminal.integrated.defaultProfile.windows": "PowerShell",
    "terminal.integrated.cursorBlinking": true,
    "workbench.colorCustomizations": {
        "terminal.ansiBlue": "#023e7d",
        "terminal.ansiMagenta": "#e01e37",
        "terminal.ansiYellow": "#d6d2d2",
        "terminal.ansiCyan": "#e01e37",
        "terminal.ansiBlack": "#355070",
        "terminal.ansiGreen": "#70e000",
        "terminal.background": "#0F172B",
        // "terminal.foreground": "#fcf300",
        "terminal.foreground": "#00ffb3",
        "terminal.selectionBackground": "#355070"
    },
    "terminal.integrated.cursorStyle": "line",
    "terminal.integrated.cursorWidth": 3,
    "editor.cursorSurroundingLinesStyle": "all",
    "terminal.integrated.enableMultiLinePasteWarning": false,
    "terminal.integrated.env.windows": {},
    "explorer.confirmDelete": false,

    "workbench.preferredHighContrastColorTheme": "Learn with Sumit - Peace of the eye - Dracula version",
    "html.format.endWithNewline": true,
    "tailwindCSS.emmetCompletions": true,
    "html-css-class-completion.enableEmmetSupport": true,
    "html-css-class-completion.includeGlobPattern": "**/*.{css,html,js}",

    "javascript.updateImportsOnFileMove.enabled": "always",

    "vsicons.dontShowNewVersionMessage": true,

    "editor.quickSuggestions": {
        "other": "on",
        "comments": "on",
        "strings": "on"
    },
    //!  Language Settings - Formate and linting

    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[css]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "scss.format.enable": true,
    "[scss]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "javascript.preferences.importModuleSpecifierEnding": "index",
    "[javascriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "json.maxItemsComputed": 50000,
    "[c]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[markdown]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    // "[sql]": {
    //   "editor.defaultFormatter": "ms-mssql.mssql"
    // },
    // ! Extension Settings
    //? spell checker
    "cSpell.userWords": [
        "Alim",
        "Baharul",
        "BGSS",
        "Bhashantek",
        "daisyui",
        "flowbite",
        "immer",
        "kawsar",
        "lucide",
        "Md Kawsar Islam Yeasin",
        "MERN",
        "Mridul",
        "Nasima",
        "pcss",
        "PERN",
        "Siam",
        "signup",
        "singup",
        "Sumit",
        "tailstrap",
        "tailwindcss",
        "tanstack",
        "Toploader",
        "twind",
        "UUIDV",
        "vite",
        "Yeasin",
        "zustand"
    ],
    //? auto path
    "javascript.suggest.paths": true,
    "typescript.suggest.paths": true,

    //? ES7 / React Snippets
    "reactSnippets.settings.importReactOnTop": false,
    "reactSnippets.settings.typescriptPropsStatePrefix": "interface",
    "editor.foldingImportsByDefault": false,

    "auto-rename-tag.activationOnLanguage": ["*"],
    "git.autorefresh": true,

    //? ENV
    "files.associations": {
        "*.env.*": "env",
        "*.env.local": "env"
    },
    //? Console Ninja
    "console-ninja.toolsToEnableSupportAutomaticallyFor": {
        "live-server-extension": true,
        "live-preview-extension": true
    },
    //? Co-pilot
    "github.copilot.enable": {
        "*": true,
        "plaintext": true,
        "markdown": true,
        "scminput": false,
        "yaml": true,
        "javascriptreact": true,
        "typescript": true,
        "javascript": true,
        "json": true,
        "c": true,
        "sql": true
    },
    // ? Highlight Matching Tag
    "highlight-matching-tag.highlightFromContent": true,
    "highlight-matching-tag.highlightSelfClosing": true,

    // ?  class-variance-authority support
    "tailwindCSS.experimental.classRegex": [
        ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
        ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
    ],

    "rapidapi.terminalLink.enabled": true,
    "cSpell.showAutocompleteSuggestions": true,
    "reactSnippets.settings.prettierEnabled": true,
    "git.autofetch": true,
    "workbench.colorTheme": "Learn with Sumit - Party",
    "editor.inlineSuggest.enabled": true,
    "typescript.updateImportsOnFileMove.enabled": "always",
    "git.openRepositoryInParentFolders": "always",

    "git.enableSmartCommit": true,
    "workbench.editorAssociations": {
        "*.msi": "default"
    },
    "editor.unicodeHighlight.invisibleCharacters": false,
    "editor.unicodeHighlight.ambiguousCharacters": false,

    "terminal.integrated.profiles.windows": {
        "PowerShell": {
            "source": "PowerShell",
            "icon": "terminal-powershell"
        },
        "Command Prompt": {
            "path": [
                "${env:windir}\\Sysnative\\cmd.exe",
                "${env:windir}\\System32\\cmd.exe"
            ],
            "args": [],
            "icon": "terminal-cmd"
        },

        "Git Bash": {
            "source": "Git Bash"
        }
    },
    "hediet.vscode-drawio.resizeImages": null,
    "terminal.integrated.commandsToSkipShell": ["mysql command line"],
    "cSpell.ignoreWords": ["ITENARY", "Roboto", "itenary"],
    "oracledevtools.bookmarkFileFolder": "C:\\Users\\Mohammad Alim\\Oracle\\oracle.oracledevtools",
    "oracledevtools.download.otherFolder": "C:\\Users\\Mohammad Alim\\downloads",
    "oracledevtools.connectionConfiguration.configFilesFolder": "C:\\Users\\Mohammad Alim\\Oracle\\network\\admin",
    "[oraclesql]": {
        "editor.suggest.showSnippets": true,
        "editor.quickSuggestions": {
            "comments": "on",
            "strings": "on",
            "other": "on"
        }
    },
    "oracledevtools.connectionConfiguration.walletFileFolder": "C:\\Users\\Mohammad Alim\\Oracle\\network\\admin",
    "console-ninja.featureSet": "Community",
    "git.confirmSync": false,
    "editor.formatOnSaveMode": "modificationsIfAvailable",
    "diffEditor.ignoreTrimWhitespace": false,
    "workbench.sideBar.location": "right",
    "window.zoomLevel": 1,
    "codeQL.telemetry.enableTelemetry": true,
    "editor.formatOnSave": true,
    "eslint.codeActionsOnSave.rules": ["prettier"]
}
