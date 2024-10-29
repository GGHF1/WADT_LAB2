const editor = CodeMirror(document.getElementById('editor-container'), { // codemirror settings
    lineNumbers: true,
    mode: 'python',
    theme: 'material-palenight',
    matchBrackets: true,
    lineWrapping: true,
    extraKeys: {
        "Tab": function(cm) {
            cm.replaceSelection("    "); 
        }
    }
});

// default welcome message on page load
window.addEventListener("load", function() {
    editor.setValue("# Welcome to Syntax Highlighter!\n# Start typing your code here...\n");
});

document.querySelector('.drawer-toggle').addEventListener('click', toggleSidebar);
// function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

// function to switch language
function switchLanguage() {
    const languageSelector = document.getElementById('language-selector');
    const selectedLanguage = languageSelector.value;

    let mode;
    switch (selectedLanguage) {
        case 'python':
            mode = 'python';
            editor.setValue("# Switched to Python syntax highlighting.\n");
            break;
        case 'javascript':
            mode = 'javascript';
            editor.setValue("// Switched to JavaScript syntax highlighting.\n");
            break;
        case 'go':
            mode = 'go';
            editor.setValue("// Switched to Go syntax highlighting.\n");
            break;
        default:
            mode = 'python';
    }

    editor.setOption("mode", mode);
}

// function to switch theme
function switchTheme() {
    const themeSelector = document.getElementById('theme-selector');
    const selectedTheme = themeSelector.value;
    editor.setOption("theme", selectedTheme);
}
