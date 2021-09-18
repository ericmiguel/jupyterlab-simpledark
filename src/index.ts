import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';
import { ISettingRegistry } from '@jupyterlab/settingregistry';

const extensionId = 'jupyterlab-simpledark:plugin';

/**
 * A plugin for jupyterlab-simpledark
 * Since the JupyterLab theme extension seem to only allow for one index.css file, there is a set of variables
 * defined in index.css which is overridden here depending of the choice of theme.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: extensionId,
  requires: [IThemeManager, ISettingRegistry],
  activate: function (app: JupyterFrontEnd, manager: IThemeManager, settingRegistry: ISettingRegistry,) {
    const style = 'jupyterlab-simpledark/index.css';
    let width = "";

    // Load settings
    Promise.all([
      settingRegistry.load(extensionId),
      app.restored
    ]).then(async ([settings]) => {
      width = settings.get('maxCellWidth').composite.toString();
      document.documentElement.style.setProperty('--max-cell-width', width);
    });

    manager.register({
      name: 'Simpledark fresh',
      isLight: false,
      load: () => {

        // Brand colors
        document.documentElement.style.setProperty('--jp-brand-color0', 'var(--simpledark-green-700)');
        document.documentElement.style.setProperty('--jp-brand-color1', 'var(--simpledark-green-500)');
        document.documentElement.style.setProperty('--jp-brand-color2', 'var(--simpledark-green-400)');
        document.documentElement.style.setProperty('--jp-brand-color3', 'var(--simpledark-green-100)');

        // Theme colors
        document.documentElement.style.setProperty('--simpledark-layout-color0', 'var(--simpledark-grey-900)');
        document.documentElement.style.setProperty('--simpledark-layout-color1', 'var(--simpledark-grey-900)');
        document.documentElement.style.setProperty('--simpledark-layout-color2', 'var(--simpledark-grey-950)');
        document.documentElement.style.setProperty('--simpledark-layout-color3', 'var(--simpledark-green-500)');
        document.documentElement.style.setProperty('--simpledark-layout-color4', 'var(--simpledark-grey-400)');

        document.documentElement.style.setProperty('--jp-layout-color0', 'var(--simpledark-grey-900)');
        document.documentElement.style.setProperty('--jp-layout-color1', 'var(--simpledark-grey-900)');
        document.documentElement.style.setProperty('--jp-layout-color2', 'var(--simpledark-grey-950)');
        document.documentElement.style.setProperty('--jp-layout-color3', 'var(--simpledark-grey-300)');
        document.documentElement.style.setProperty('--jp-layout-color4', 'var(--simpledark-grey-400)');

        document.documentElement.style.setProperty('--jp-inverse-layout-color0', 'var(--simpledark-green-400)');
        document.documentElement.style.setProperty('--jp-inverse-layout-color1', 'var(--simpledark-green-400)');
        document.documentElement.style.setProperty('--jp-inverse-layout-color2', 'var(--simpledark-green-500)');
        document.documentElement.style.setProperty('--jp-inverse-layout-color3', 'var(--simpledark-green-600)');
        document.documentElement.style.setProperty('--jp-inverse-layout-color4', 'var(--simpledark-green-700)');

        document.documentElement.style.setProperty('--jp-border-color0', 'var(--simpledark-layout-color0)');
        document.documentElement.style.setProperty('--jp-border-color1', 'var(--simpledark-layout-color0)');
        document.documentElement.style.setProperty('--jp-border-color2', 'var(--simpledark-layout-color0)');
        document.documentElement.style.setProperty('--jp-border-color3', 'var(--simpledark-layout-color0)');

        // Object & font colors
        document.documentElement.style.setProperty('--simpledark-background-color', 'rgb(var(--simpledark-black))');
        document.documentElement.style.setProperty('--simpledark-code-cell-color', 'var(--simpledark-grey-800)');
        document.documentElement.style.setProperty('--simpledark-base-font-color', 'var(--simpledark-white)');
        document.documentElement.style.setProperty('--simpledark-inverse-font-color', 'var(--simpledark-black)');
        document.documentElement.style.setProperty('--jp-rendermime-error-background', 'var(--simpledark-red-900)');

        // Menu color
        document.documentElement.style.setProperty('--simpledark-menu-color', 'var(--simpledark-grey-900)');

        // Line border color
        document.documentElement.style.setProperty('--jp-border-color2', 'var(--simpledark-grey-900)');

        // Search result highlighting
        document.documentElement.style.setProperty('--jp-search-selected-match-background-color', 'var(--simpledark-green-600)');
        document.documentElement.style.setProperty('--jp-search-unselected-match-background-color', 'var(--simpledark-green-800)');

        // State colors
        document.documentElement.style.setProperty('--jp-info-color0', 'var(--simpledark-blue-700)');
        document.documentElement.style.setProperty('--jp-info-color1', 'var(--simpledark-blue-600)');
        document.documentElement.style.setProperty('--jp-info-color2', 'var(--simpledark-blue-500)');
        document.documentElement.style.setProperty('--jp-info-color3', 'var(--simpledark-blue-400)');

        document.documentElement.style.setProperty('--jp-warn-color0', 'var(--simpledark-orange-500)');
        document.documentElement.style.setProperty('--jp-warn-color1', 'var(--simpledark-orange-500)');
        document.documentElement.style.setProperty('--jp-warn-color2', 'var(--simpledark-orange-500)');
        document.documentElement.style.setProperty('--jp-warn-color3', 'var(--simpledark-orange-500)');

        document.documentElement.style.setProperty('--jp-error-color0', 'var(--simpledark-red-700)');
        document.documentElement.style.setProperty('--jp-error-color1', 'var(--simpledark-red-500)');
        document.documentElement.style.setProperty('--jp-error-color2', 'var(--simpledark-red-300)');
        document.documentElement.style.setProperty('--jp-error-color3', 'var(--simpledark-red-100)');

        document.documentElement.style.setProperty('--jp-success-color0', 'var(--simpledark-green-500)');
        document.documentElement.style.setProperty('--jp-success-color1', 'var(--simpledark-green-500)');
        document.documentElement.style.setProperty('--jp-success-color2', 'var(--simpledark-green-300)');
        document.documentElement.style.setProperty('--jp-success-color3', 'var(--simpledark-green-100)');

        // Scrollbar color
        document.documentElement.style.setProperty('--simpledark-scrollbar-thumb-color', 'var(--simpledark-grey-700)');

        // Editor colors
        document.documentElement.style.setProperty('--jp-mirror-editor-keyword-color', 'var(--simpledark-green-500)');
        document.documentElement.style.setProperty('--jp-mirror-editor-atom-color', 'var(--simpledark-blue-300)');
        document.documentElement.style.setProperty('--jp-mirror-editor-number-color', '#b5cea8');
        document.documentElement.style.setProperty('--jp-mirror-editor-def-color', '#79d9ff');
        document.documentElement.style.setProperty('--jp-mirror-editor-variable-color', 'var(--jp-content-font-color1)');
        document.documentElement.style.setProperty('--jp-mirror-editor-variable-2-color', '#79d9ff');
        document.documentElement.style.setProperty('--jp-mirror-editor-variable-3-color', 'var(--simpledark-green-600)');
        document.documentElement.style.setProperty('--jp-mirror-editor-punctuation-color', '#79d9ff');
        document.documentElement.style.setProperty('--jp-mirror-editor-property-color', '#79d9ff');
        document.documentElement.style.setProperty('--jp-mirror-editor-operator-color', '#daabf7');
        document.documentElement.style.setProperty('--jp-mirror-editor-comment-color', '#aebca8');
        document.documentElement.style.setProperty('--jp-mirror-editor-string-color', '#ce9178');
        document.documentElement.style.setProperty('--jp-mirror-editor-string-2-color', 'var(--simpledark-purple-300)');
        document.documentElement.style.setProperty('--jp-mirror-editor-meta-color', '#daabf7');
        document.documentElement.style.setProperty('--jp-mirror-editor-qualifier-color', '#555');
        document.documentElement.style.setProperty('--jp-mirror-editor-builtin-color', 'var(--simpledark-green-600)');
        document.documentElement.style.setProperty('--jp-mirror-editor-bracket-color', '#997');
        document.documentElement.style.setProperty('--jp-mirror-editor-tag-color', 'var(--simpledark-green-700)');
        document.documentElement.style.setProperty('--jp-mirror-editor-attribute-color', 'var(--simpledark-blue-700)');
        document.documentElement.style.setProperty('--jp-mirror-editor-header-color', 'var(--simpledark-blue-500)');
        document.documentElement.style.setProperty('--jp-mirror-editor-quote-color', 'var(--simpledark-green-300)');
        document.documentElement.style.setProperty('--jp-mirror-editor-link-color', 'var(--simpledark-blue-700)');
        document.documentElement.style.setProperty('--jp-mirror-editor-error-color', '#f00');
        document.documentElement.style.setProperty('--jp-mirror-editor-hr-color', '#999');
        document.documentElement.style.setProperty('--jp-notebook-multiselected-color', 'var(--simpledark-blue-900)');

        document.documentElement.style.setProperty('--jp-cell-prompt-not-active-font-color', 'var(--simpledark-grey-500)');
        document.documentElement.style.setProperty('--jp-cell-inprompt-font-color', 'var(--simpledark-green-700)');
        document.documentElement.style.setProperty('--jp-cell-outprompt-font-color', 'var(--simpledark-orange-600)');

        document.documentElement.style.setProperty('--jp-editor-selected-background', '#151524');
        document.documentElement.style.setProperty('--jp-search-selected-match-background-color', '#151524');
        document.documentElement.style.setProperty('--jp-search-unselected-match-background-color', 'var(--simpledark-green-700)');
        document.documentElement.style.setProperty('--jp-editor-selected-focused-background', 'var(--simpledark-green-700)');
        document.documentElement.style.setProperty('--jp-editor-cursor-color', 'var(--simpledark-green-300)');

        // Rendermime styles
        document.documentElement.style.setProperty('--jp-rendermime-error-background', 'var(--simpledark-red-300)');
        document.documentElement.style.setProperty('--jp-rendermime-table-row-background', 'var(--simpledark-grey-600)');
        document.documentElement.style.setProperty('--jp-rendermime-table-row-hover-background', 'var(--simpledark-orange-200)');
        document.documentElement.style.setProperty('--jp-rendermime-error-background', '#151524');
        

        return manager.loadCSS(style)
      },
      unload: () => Promise.resolve(undefined)
    });

    manager.register({
      name: 'Simpledark original',
      isLight: false,
      load: () => {

        // Brand colors
        document.documentElement.style.setProperty('--jp-brand-color0', 'var(--simpledark-orange-700)');
        document.documentElement.style.setProperty('--jp-brand-color1', 'var(--simpledark-orange-600)');
        document.documentElement.style.setProperty('--jp-brand-color2', 'var(--simpledark-orange-500)');
        document.documentElement.style.setProperty('--jp-brand-color3', 'var(--simpledark-orange-400)');
        document.documentElement.style.setProperty('--jp-brand-color5', 'var(--simpledark-orange-300)');

        // Accent colors
        document.documentElement.style.setProperty('--jp-accent-color0', 'var(--simpledark-indigo-800)');
        document.documentElement.style.setProperty('--jp-accent-color1', 'var(--simpledark-indigo-700)');
        document.documentElement.style.setProperty('--jp-accent-color2', 'var(--simpledark-indigo-600)');
        document.documentElement.style.setProperty('--jp-accent-color3', 'var(--simpledark-indigo-300)');

        // Theme colors
        document.documentElement.style.setProperty('--simpledark-layout-color0', '#0E0E0F');
        document.documentElement.style.setProperty('--simpledark-layout-color1', 'var(--simpledark-black-700)');
        document.documentElement.style.setProperty('--simpledark-layout-color2', 'var(--simpledark-black-500)');
        document.documentElement.style.setProperty('--simpledark-layout-color3', 'var(--simpledark-orange-500)');
        document.documentElement.style.setProperty('--simpledark-layout-color4', 'var(--simpledark-orange-300)');

        document.documentElement.style.setProperty('--jp-layout-color0', 'var(--simpledark-layout-color0)');
        document.documentElement.style.setProperty('--jp-layout-color1', 'var(--simpledark-layout-color0)');
        document.documentElement.style.setProperty('--jp-layout-color2', 'var(--simpledark-black-600)');
        document.documentElement.style.setProperty('--jp-layout-color3', 'var(--simpledark-orange-300)');
        document.documentElement.style.setProperty('--jp-layout-color4', 'var(--simpledark-layout-color0)');

        document.documentElement.style.setProperty('--jp-inverse-layout-color0', 'var(--simpledark-orange-300)');
        document.documentElement.style.setProperty('--jp-inverse-layout-color1', 'var(--simpledark-orange-300)');
        document.documentElement.style.setProperty('--jp-inverse-layout-color2', 'var(--simpledark-orange-400)');
        document.documentElement.style.setProperty('--jp-inverse-layout-color3', 'var(--simpledark-orange-500)');
        document.documentElement.style.setProperty('--jp-inverse-layout-color4', 'var(--simpledark-orange-600)');

        document.documentElement.style.setProperty('--jp-cell-prompt-not-active-font-color', 'var(--simpledark-grey-500)');
        document.documentElement.style.setProperty('--jp-cell-inprompt-font-color', 'var(--simpledark-indigo-700)');
        document.documentElement.style.setProperty('--jp-cell-outprompt-font-color', 'var(--simpledark-orange-700)');

        document.documentElement.style.setProperty('--simpledark-menu-color', 'var(--simpledark-layout-color0)');
        document.documentElement.style.setProperty('--simpledark-menu-item-hover-color', 'var(--simpledark-black-500)');

        document.documentElement.style.setProperty('--jp-border-color0', 'var(--simpledark-layout-color0)');
        document.documentElement.style.setProperty('--jp-border-color1', 'var(--simpledark-layout-color0)');
        document.documentElement.style.setProperty('--jp-border-color2', 'var(--simpledark-layout-color0)');
        document.documentElement.style.setProperty('--jp-border-color3', 'var(--simpledark-layout-color0)');

        // Object & font colors
        document.documentElement.style.setProperty('--simpledark-background-color', 'var(--simpledark-black-700)');
        document.documentElement.style.setProperty('--simpledark-code-cell-color', 'var(--simpledark-black-700)');
        document.documentElement.style.setProperty('--simpledark-base-font-color', 'var(--simpledark-white)');
        document.documentElement.style.setProperty('--simpledark-inverse-font-color', 'var(--simpledark-black)');

        // Search result highlighting
        document.documentElement.style.setProperty('--jp-search-selected-match-background-color', 'var(--simpledark-orange-600)');
        document.documentElement.style.setProperty('--jp-search-unselected-match-background-color', 'var(--simpledark-orange-800)');

        // State colors
        document.documentElement.style.setProperty('--jp-info-color0', 'var(--simpledark-indigo-700)');
        document.documentElement.style.setProperty('--jp-info-color1', 'var(--simpledark-indigo-600)');
        document.documentElement.style.setProperty('--jp-info-color2', 'var(--simpledark-indigo-500)');
        document.documentElement.style.setProperty('--jp-info-color3', 'var(--simpledark-indigo-400)');

        document.documentElement.style.setProperty('--jp-warn-color0', 'var(--simpledark-orange-500)');
        document.documentElement.style.setProperty('--jp-warn-color1', 'var(--simpledark-green-500)');
        document.documentElement.style.setProperty('--jp-warn-color2', 'var(--simpledark-orange-500)');
        document.documentElement.style.setProperty('--jp-warn-color3', 'var(--simpledark-orange-500)');

        document.documentElement.style.setProperty('--jp-error-color0', 'var(--simpledark-red-700)');
        document.documentElement.style.setProperty('--jp-error-color1', 'var(--simpledark-red-500)');
        document.documentElement.style.setProperty('--jp-error-color2', 'var(--simpledark-red-300)');
        document.documentElement.style.setProperty('--jp-error-color3', 'var(--simpledark-red-100)');

        document.documentElement.style.setProperty('--jp-success-color0', 'var(--simpledark-green-500)');
        document.documentElement.style.setProperty('--jp-success-color1', 'var(--simpledark-green-500)');
        document.documentElement.style.setProperty('--jp-success-color2', 'var(--simpledark-green-300)');
        document.documentElement.style.setProperty('--jp-success-color3', 'var(--simpledark-green-100)');

        // Scrollbar color
        document.documentElement.style.setProperty('--simpledark-scrollbar-thumb-color', 'var(--simpledark-black-700)');

        // Editor colors
        document.documentElement.style.setProperty('--jp-mirror-editor-keyword-color', '#F28C18');
        document.documentElement.style.setProperty('--jp-mirror-editor-atom-color', '#c02b50');
        document.documentElement.style.setProperty('--jp-mirror-editor-number-color', '#c02b50');
        document.documentElement.style.setProperty('--jp-mirror-editor-def-color', '#65ADF0');
        document.documentElement.style.setProperty('--jp-mirror-editor-variable-color', '#FFFFFFDA');
        document.documentElement.style.setProperty('--jp-mirror-editor-variable-2-color', '#fcb462');
        document.documentElement.style.setProperty('--jp-mirror-editor-variable-3-color', '#fce562');
        document.documentElement.style.setProperty('--jp-mirror-editor-punctuation-color', '#3B3638;');
        document.documentElement.style.setProperty('--jp-mirror-editor-property-color', '#009cb8;');
        document.documentElement.style.setProperty('--jp-mirror-editor-operator-color', '#1d77ca;');
        document.documentElement.style.setProperty('--jp-mirror-editor-comment-color', '#88b14d;');
        document.documentElement.style.setProperty('--jp-mirror-editor-string-color', '#88b14d;');
        document.documentElement.style.setProperty('--jp-mirror-editor-string-2-color', '#74a135;');
        document.documentElement.style.setProperty('--jp-mirror-editor-meta-color', '#12C7BE;');
        document.documentElement.style.setProperty('--jp-mirror-editor-qualifier-color', '#289455;');
        document.documentElement.style.setProperty('--jp-mirror-editor-builtin-color', '#00b8a8;');
        document.documentElement.style.setProperty('--jp-mirror-editor-bracket-color', '#4a79cf;');
        document.documentElement.style.setProperty('--jp-mirror-editor-tag-color', '#F07178;');
        document.documentElement.style.setProperty('--jp-mirror-editor-attribute-color', '#FFCB6B;');
        document.documentElement.style.setProperty('--jp-mirror-editor-header-color', '#C4FF6B');
        document.documentElement.style.setProperty('--jp-mirror-editor-quote-color', '#C4FF6B');
        document.documentElement.style.setProperty('--jp-mirror-editor-link-color', '#F78C6C');
        document.documentElement.style.setProperty('--jp-mirror-editor-error-color', '#FF5370');
        document.documentElement.style.setProperty('--jp-mirror-editor-hr-color', 'var(--simpledark-orange-800)');

        document.documentElement.style.setProperty('--jp-editor-selected-background', '#151524');
        document.documentElement.style.setProperty('--jp-search-selected-match-background-color', '#151524');
        document.documentElement.style.setProperty('--jp-search-unselected-match-background-color', 'var(--simpledark-orange-800)');
        document.documentElement.style.setProperty('--jp-editor-selected-focused-background', 'var(--simpledark-orange-800)');
        document.documentElement.style.setProperty('--jp-editor-cursor-color', '#F28C18');
        /* --jp-search-selected-match-color: var(--); */
        /* --jp-search-unselected-match-color: var(--); */

        // Rendermime styles
        document.documentElement.style.setProperty('--jp-rendermime-error-background', 'var(--simpledark-red-300)');
        document.documentElement.style.setProperty('--jp-rendermime-table-row-background', 'var(--simpledark-grey-600)');
        document.documentElement.style.setProperty('--jp-rendermime-table-row-hover-background', 'var(--simpledark-orange-200)');
        document.documentElement.style.setProperty('--jp-rendermime-error-background', '#151524');

        // Notebook specific styles
        document.documentElement.style.setProperty('--jp-notebook-select-background', '#1F1F36');
        document.documentElement.style.setProperty('--jp-notebook-multiselected-color', '#1F1F36');

        return manager.loadCSS(style)

      },
      unload: () => Promise.resolve(undefined)
    });

  },
  autoStart: true
};

export default plugin;
