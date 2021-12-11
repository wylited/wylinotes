'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var MinimalTheme = /** @class */ (function (_super) {
    __extends(MinimalTheme, _super);
    function MinimalTheme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MinimalTheme.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var media, callback, lightStyles, darkStyles, theme;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadSettings()];
                    case 1:
                        _a.sent();
                        this.addSettingTab(new MinimalSettingTab(this.app, this));
                        this.addStyle();
                        media = window.matchMedia('(prefers-color-scheme: dark)');
                        callback = function () {
                            if (media.matches && _this.settings.useSystemTheme) {
                                console.log('Dark mode active');
                                _this.updateDarkStyle();
                            }
                            else if (_this.settings.useSystemTheme) {
                                console.log('Light mode active');
                                _this.updateLightStyle();
                            }
                        };
                        media.addEventListener('change', callback);
                        // Remove listener when we unload
                        this.register(function () { return media.removeEventListener('change', callback); });
                        callback();
                        lightStyles = ['minimal-light', 'minimal-light-tonal', 'minimal-light-contrast', 'minimal-light-white'];
                        darkStyles = ['minimal-dark', 'minimal-dark-tonal', 'minimal-dark-black'];
                        theme = ['moonstone', 'obsidian'];
                        this.addCommand({
                            id: 'increase-body-font-size',
                            name: 'Increase body font size',
                            callback: function () {
                                _this.settings.textNormal = _this.settings.textNormal + 0.5;
                                _this.saveData(_this.settings);
                                _this.refresh();
                            }
                        });
                        this.addCommand({
                            id: 'decrease-body-font-size',
                            name: 'Decrease body font size',
                            callback: function () {
                                _this.settings.textNormal = _this.settings.textNormal - 0.5;
                                _this.saveData(_this.settings);
                                _this.refresh();
                            }
                        });
                        this.addCommand({
                            id: 'toggle-minimal-dark-cycle',
                            name: 'Cycle between dark mode styles',
                            callback: function () {
                                _this.settings.darkStyle = darkStyles[(darkStyles.indexOf(_this.settings.darkStyle) + 1) % darkStyles.length];
                                _this.saveData(_this.settings);
                                _this.updateDarkStyle();
                            }
                        });
                        this.addCommand({
                            id: 'toggle-minimal-light-cycle',
                            name: 'Cycle between light mode styles',
                            callback: function () {
                                _this.settings.lightStyle = lightStyles[(lightStyles.indexOf(_this.settings.lightStyle) + 1) % lightStyles.length];
                                _this.saveData(_this.settings);
                                _this.updateLightStyle();
                            }
                        });
                        this.addCommand({
                            id: 'toggle-hidden-borders',
                            name: 'Toggle sidebar borders',
                            callback: function () {
                                _this.settings.bordersToggle = !_this.settings.bordersToggle;
                                _this.saveData(_this.settings);
                                _this.refresh();
                            }
                        });
                        this.addCommand({
                            id: 'toggle-minimal-switch',
                            name: 'Switch between light and dark mode',
                            callback: function () {
                                _this.settings.theme = theme[(theme.indexOf(_this.settings.theme) + 1) % theme.length];
                                _this.saveData(_this.settings);
                                _this.updateTheme();
                            }
                        });
                        this.addCommand({
                            id: 'toggle-minimal-light-default',
                            name: 'Use light mode (default)',
                            callback: function () {
                                _this.settings.lightStyle = 'minimal-light';
                                _this.saveData(_this.settings);
                                _this.updateLightStyle();
                            }
                        });
                        this.addCommand({
                            id: 'toggle-minimal-light-white',
                            name: 'Use light mode (all white)',
                            callback: function () {
                                _this.settings.lightStyle = 'minimal-light-white';
                                _this.saveData(_this.settings);
                                _this.updateLightStyle();
                            }
                        });
                        this.addCommand({
                            id: 'toggle-minimal-light-tonal',
                            name: 'Use light mode (low contrast)',
                            callback: function () {
                                _this.settings.lightStyle = 'minimal-light-tonal';
                                _this.saveData(_this.settings);
                                _this.updateLightStyle();
                            }
                        });
                        this.addCommand({
                            id: 'toggle-minimal-light-contrast',
                            name: 'Use light mode (high contrast)',
                            callback: function () {
                                _this.settings.lightStyle = 'minimal-light-contrast';
                                _this.saveData(_this.settings);
                                _this.updateLightStyle();
                            }
                        });
                        this.addCommand({
                            id: 'toggle-minimal-dark-default',
                            name: 'Use dark mode (default)',
                            callback: function () {
                                _this.settings.darkStyle = 'minimal-dark';
                                _this.saveData(_this.settings);
                                _this.updateDarkStyle();
                            }
                        });
                        this.addCommand({
                            id: 'toggle-minimal-dark-tonal',
                            name: 'Use dark mode (low contrast)',
                            callback: function () {
                                _this.settings.darkStyle = 'minimal-dark-tonal';
                                _this.saveData(_this.settings);
                                _this.updateDarkStyle();
                            }
                        });
                        this.addCommand({
                            id: 'toggle-minimal-dark-black',
                            name: 'Use dark mode (true black)',
                            callback: function () {
                                _this.settings.darkStyle = 'minimal-dark-black';
                                _this.saveData(_this.settings);
                                _this.updateDarkStyle();
                            }
                        });
                        this.refresh();
                        return [2 /*return*/];
                }
            });
        });
    };
    MinimalTheme.prototype.onunload = function () {
        console.log('Unloading Minimal Theme Settings plugin');
    };
    MinimalTheme.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        _c = (_b = Object).assign;
                        _d = [DEFAULT_SETTINGS];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = _c.apply(_b, _d.concat([_e.sent()]));
                        return [2 /*return*/];
                }
            });
        });
    };
    MinimalTheme.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // refresh function for when we change settings
    MinimalTheme.prototype.refresh = function () {
        // re-load the style
        this.updateStyle();
    };
    // add the styling elements we need
    MinimalTheme.prototype.addStyle = function () {
        // add a css block for our settings-dependent styles
        var css = document.createElement('style');
        css.id = 'minimal-theme';
        document.getElementsByTagName("head")[0].appendChild(css);
        // add the main class
        document.body.classList.add('minimal-theme');
        // update the style with the settings-dependent styles
        this.updateStyle();
    };
    // update the styles (at the start, or as the result of a settings change)
    MinimalTheme.prototype.updateStyle = function () {
        this.removeStyle();
        document.body.classList.toggle('borders-none', !this.settings.bordersToggle);
        document.body.classList.toggle('fancy-cursor', this.settings.fancyCursor);
        document.body.classList.toggle('focus-mode', this.settings.focusMode);
        document.body.classList.toggle('links-int-on', this.settings.underlineInternal);
        document.body.classList.toggle('links-ext-on', this.settings.underlineExternal);
        document.body.classList.toggle('system-shade', this.settings.useSystemTheme);
        document.body.classList.toggle('full-width-media', this.settings.fullWidthMedia);
        document.body.classList.toggle('minimal-status-off', !this.settings.minimalStatus);
        document.body.classList.toggle('full-file-names', !this.settings.trimNames);
        document.body.classList.toggle('minimal-icons-off', !this.settings.minimalIcons);
        document.body.classList.toggle('minimal-folding', this.settings.folding);
        document.body.classList.toggle('minimal-rel-edit', this.settings.relationLinesEdit);
        document.body.classList.toggle('minimal-rel-preview', this.settings.relationLinesPreview);
        // get the custom css element
        var el = document.getElementById('minimal-theme');
        if (!el)
            throw "minimal-theme element not found!";
        else {
            // set the settings-dependent css
            el.innerText = "\n        body.minimal-theme{\n          --font-normal:" + this.settings.textNormal + "px;\n          --font-small:" + this.settings.textSmall + "px;\n          --line-width:" + this.settings.lineWidth + "rem;\n          --max-width:" + this.settings.maxWidth + "%;\n          --text:" + this.settings.textFont + ";\n          --text-editor:" + this.settings.editorFont + ";\n          --font-ui:" + this.settings.uiFont + ";\n          --font-monospace:" + this.settings.monoFont + ";\n          --accent-h:" + this.settings.accentHue + ";\n          --accent-s:" + this.settings.accentSat + "%;}\n      ";
        }
    };
    MinimalTheme.prototype.refreshSystemTheme = function () {
        var isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (isDarkMode && this.settings.useSystemTheme) {
            console.log('Dark mode active');
            this.updateDarkStyle();
        }
        else if (this.settings.useSystemTheme) {
            console.log('Light mode active');
            this.updateLightStyle();
        }
    };
    MinimalTheme.prototype.updateDarkStyle = function () {
        document.body.removeClass('theme-light', 'minimal-dark', 'minimal-dark-tonal', 'minimal-dark-black');
        document.body.addClass(this.settings.darkStyle);
        // @ts-ignore
        this.app.setTheme('obsidian');
        // @ts-ignore
        this.app.vault.setConfig('theme', 'obsidian');
        this.app.workspace.trigger('css-change');
    };
    MinimalTheme.prototype.updateLightStyle = function () {
        document.body.removeClass('theme-dark', 'minimal-light', 'minimal-light-tonal', 'minimal-light-contrast', 'minimal-light-white');
        document.body.addClass(this.settings.lightStyle);
        // @ts-ignore
        this.app.setTheme('moonstone');
        // @ts-ignore
        this.app.vault.setConfig('theme', 'moonstone');
        this.app.workspace.trigger('css-change');
    };
    MinimalTheme.prototype.updateTheme = function () {
        // @ts-ignore
        this.app.setTheme(this.settings.theme);
        // @ts-ignore
        this.app.vault.setConfig('theme', this.settings.theme);
        this.app.workspace.trigger('css-change');
    };
    MinimalTheme.prototype.removeStyle = function () {
        document.body.removeClass('minimal-light', 'minimal-light-tonal', 'minimal-light-contrast', 'minimal-light-white', 'minimal-dark', 'minimal-dark-tonal', 'minimal-dark-black');
        document.body.addClass(this.settings.lightStyle, this.settings.darkStyle);
    };
    return MinimalTheme;
}(obsidian.Plugin));
var DEFAULT_SETTINGS = {
    theme: 'moonstone',
    accentHue: 201,
    accentSat: 17,
    lightStyle: 'minimal-light',
    darkStyle: 'minimal-dark',
    uiFont: '-apple-system,BlinkMacSystemFont,"Segoe UI Emoji","Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,sans-serif',
    textFont: '-apple-system,BlinkMacSystemFont,"Segoe UI Emoji","Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,sans-serif',
    editorFont: '-apple-system,BlinkMacSystemFont,"Segoe UI Emoji","Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,sans-serif',
    monoFont: 'Menlo,SFMono-Regular,Consolas,Roboto Mono,monospace',
    lineWidth: 40,
    maxWidth: 88,
    textNormal: 16,
    textSmall: 13,
    minimalIcons: true,
    fancyCursor: true,
    trimNames: true,
    fullWidthMedia: true,
    bordersToggle: true,
    minimalStatus: true,
    focusMode: false,
    underlineInternal: true,
    underlineExternal: true,
    useSystemTheme: false,
    folding: false,
    relationLinesPreview: false,
    relationLinesEdit: false
};
var MinimalSettingTab = /** @class */ (function (_super) {
    __extends(MinimalSettingTab, _super);
    function MinimalSettingTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    MinimalSettingTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl('h3', { text: 'Minimal Theme Settings' });
        containerEl.createEl('p', { text: 'If you notice any issues, update to the latest version of Minimal Theme and reload Obsidian. Download the Hider plugin for additional options to further simplify the Obsidian UI.' });
        containerEl.createEl('a', { text: '⬤ Accent color' });
        containerEl.createEl('h3');
        new obsidian.Setting(containerEl)
            .setName('Accent color hue')
            .setDesc('For links and interactive elements')
            .addSlider(function (slider) { return slider
            .setLimits(0, 360, 1)
            .setValue(_this.plugin.settings.accentHue)
            .onChange(function (value) {
            _this.plugin.settings.accentHue = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Accent color saturation')
            .setDesc('For links and interactive elements')
            .addSlider(function (slider) { return slider
            .setLimits(0, 100, 1)
            .setValue(_this.plugin.settings.accentSat)
            .onChange(function (value) {
            _this.plugin.settings.accentSat = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Light mode style')
            .setDesc('Background colors in light mode')
            .addDropdown(function (dropdown) { return dropdown
            .addOption('minimal-light', 'Default')
            .addOption('minimal-light-white', 'All white')
            .addOption('minimal-light-tonal', 'Low contrast')
            .addOption('minimal-light-contrast', 'High contrast')
            .setValue(_this.plugin.settings.lightStyle)
            .onChange(function (value) {
            _this.plugin.settings.lightStyle = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.removeStyle();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Dark mode style')
            .setDesc('Background colors in dark mode')
            .addDropdown(function (dropdown) { return dropdown
            .addOption('minimal-dark', 'Default')
            .addOption('minimal-dark-tonal', 'Low contrast')
            .addOption('minimal-dark-black', 'True black')
            .setValue(_this.plugin.settings.darkStyle)
            .onChange(function (value) {
            _this.plugin.settings.darkStyle = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.removeStyle();
        }); });
        containerEl.createEl('br');
        containerEl.createEl('h3');
        containerEl.createEl('h3', { text: 'Features' });
        new obsidian.Setting(containerEl)
            .setName('Custom icons')
            .setDesc('Replace default icons with Minimal set')
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.minimalIcons)
            .onChange(function (value) {
            _this.plugin.settings.minimalIcons = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Fancy cursor')
            .setDesc('The editor cursor uses your accent color')
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.fancyCursor)
            .onChange(function (value) {
            _this.plugin.settings.fancyCursor = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Minimal status bar')
            .setDesc('Use narrow status bar')
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.minimalStatus)
            .onChange(function (value) {
            _this.plugin.settings.minimalStatus = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Match system setting for light or dark mode')
            .setDesc('Automatically switch based on your OS setting')
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.useSystemTheme)
            .onChange(function (value) {
            _this.plugin.settings.useSystemTheme = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refreshSystemTheme();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Hide sidebar borders')
            .setDesc('Turn off borders on sidebars')
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.bordersToggle)
            .onChange(function (value) {
            _this.plugin.settings.bordersToggle = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Hide action buttons in focus mode')
            .setDesc('When sidebars are collapsed, hide action buttons (hover to reveal them)')
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.focusMode)
            .onChange(function (value) {
            _this.plugin.settings.focusMode = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Trim file names in sidebars')
            .setDesc('Use ellipses to fit file names on a single line')
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.trimNames)
            .onChange(function (value) {
            _this.plugin.settings.trimNames = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Folding offset')
            .setDesc('Recommended if you use folding headings and indents')
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.folding)
            .onChange(function (value) {
            _this.plugin.settings.folding = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Relationship lines in Preview')
            .setDesc('Show vertical lines that connect related bullet points and task lists')
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.relationLinesPreview)
            .onChange(function (value) {
            _this.plugin.settings.relationLinesPreview = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Relationship lines in Editor')
            .setDesc('Show vertical lines that connect related bullet points and task lists')
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.relationLinesEdit)
            .onChange(function (value) {
            _this.plugin.settings.relationLinesEdit = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Maximize media')
            .setDesc('Images and videos fill the width of the line')
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.fullWidthMedia)
            .onChange(function (value) {
            _this.plugin.settings.fullWidthMedia = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Underline internal links')
            .setDesc('Show underlines on internal links')
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.underlineInternal)
            .onChange(function (value) {
            _this.plugin.settings.underlineInternal = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Underline external links')
            .setDesc('Show underlines on external links')
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.underlineExternal)
            .onChange(function (value) {
            _this.plugin.settings.underlineExternal = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        containerEl.createEl('br');
        containerEl.createEl('h3');
        containerEl.createEl('h3', { text: 'Typography' });
        new obsidian.Setting(containerEl)
            .setName('Text font')
            .setDesc('Used in preview mode — the font must also be installed on your system')
            .addDropdown(function (dropdown) { return dropdown
            .addOption('-apple-system,BlinkMacSystemFont,"Segoe UI Emoji","Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,sans-serif', 'System font')
            .addOption('Inter', 'Inter')
            .addOption('Avenir', 'Avenir')
            .addOption('iA Writer Mono S', 'iA Mono')
            .addOption('iA Writer Duo S', 'iA Duo')
            .addOption('iA Writer Quattro S', 'iA Quattro')
            .addOption('SFMono-Regular', 'SF Mono')
            .addOption('Consolas', 'Consolas')
            .addOption('Roboto Mono', 'Roboto Mono')
            .setValue(_this.plugin.settings.textFont)
            .onChange(function (value) {
            _this.plugin.settings.textFont = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Editor font')
            .setDesc('Used in edit mode')
            .addDropdown(function (dropdown) { return dropdown
            .addOption('-apple-system,BlinkMacSystemFont,"Segoe UI Emoji","Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,sans-serif', 'System font')
            .addOption('Inter', 'Inter')
            .addOption('Avenir', 'Avenir')
            .addOption('iA Writer Mono S', 'iA Mono')
            .addOption('iA Writer Duo S', 'iA Duo')
            .addOption('iA Writer Quattro S', 'iA Quattro')
            .addOption('SFMono-Regular', 'SF Mono')
            .addOption('Consolas', 'Consolas')
            .addOption('Roboto Mono', 'Roboto Mono')
            .setValue(_this.plugin.settings.editorFont)
            .onChange(function (value) {
            _this.plugin.settings.editorFont = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Monospace font')
            .setDesc('Used for code blocks and front matter')
            .addDropdown(function (dropdown) { return dropdown
            .addOption('Menlo,SFMono-Regular,Consolas,Roboto Mono,monospace', 'System font')
            .addOption('iA Writer Mono S', 'iA Mono')
            .addOption('iA Writer Duo S', 'iA Duo')
            .addOption('iA Writer Quattro S', 'iA Quattro')
            .addOption('SFMono-Regular', 'SF Mono')
            .addOption('Consolas', 'Consolas')
            .addOption('Roboto Mono', 'Roboto Mono')
            .setValue(_this.plugin.settings.monoFont)
            .onChange(function (value) {
            _this.plugin.settings.monoFont = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('UI font')
            .setDesc('Used for the user interface such as menus and sidebar')
            .addDropdown(function (dropdown) { return dropdown
            .addOption('-apple-system,BlinkMacSystemFont,"Segoe UI Emoji","Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,sans-serif', 'System font')
            .addOption('Avenir', 'Avenir')
            .addOption('iA Writer Mono S', 'iA Mono')
            .addOption('iA Writer Duo S', 'iA Duo')
            .addOption('iA Writer Quattro S', 'iA Quattro')
            .addOption('SFMono-Regular', 'SF Mono')
            .addOption('Consolas', 'Consolas')
            .addOption('Roboto Mono', 'Roboto Mono')
            .setValue(_this.plugin.settings.uiFont)
            .onChange(function (value) {
            _this.plugin.settings.uiFont = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Normal line width')
            .setDesc('Number of characters per line (default 40)')
            .addText(function (text) { return text.setPlaceholder('40')
            .setValue((_this.plugin.settings.lineWidth || '') + '')
            .onChange(function (value) {
            _this.plugin.settings.lineWidth = parseInt(value.trim());
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Maximum line width')
            .setDesc('Percentage of space inside a pane that a line can fill. Recommended values between 80 to 100 (default 88)')
            .addText(function (text) { return text.setPlaceholder('88')
            .setValue((_this.plugin.settings.maxWidth || '') + '')
            .onChange(function (value) {
            _this.plugin.settings.maxWidth = parseInt(value.trim());
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Body font size')
            .setDesc('Used for the main text (default 16)')
            .addText(function (text) { return text.setPlaceholder('16')
            .setValue((_this.plugin.settings.textNormal || '') + '')
            .onChange(function (value) {
            _this.plugin.settings.textNormal = parseInt(value.trim());
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Sidebar font size')
            .setDesc('Used for text in the sidebars (default 13)')
            .addText(function (text) { return text.setPlaceholder('13')
            .setValue((_this.plugin.settings.textSmall || '') + '')
            .onChange(function (value) {
            _this.plugin.settings.textSmall = parseInt(value.trim());
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        containerEl.createEl('br');
        containerEl.createEl('h3');
        containerEl.createEl('h3', { text: 'Custom fonts' });
        containerEl.createEl('p', { text: 'These settings override the dropdowns above. Make sure to use the exact name of the font as it appears on your system.' });
        new obsidian.Setting(containerEl)
            .setName('Custom text font')
            .setDesc('Used in preview mode')
            .addText(function (text) { return text.setPlaceholder('')
            .setValue((_this.plugin.settings.textFont || '') + '')
            .onChange(function (value) {
            _this.plugin.settings.textFont = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Custom editor font')
            .setDesc('Used in edit mode')
            .addText(function (text) { return text.setPlaceholder('')
            .setValue((_this.plugin.settings.editorFont || '') + '')
            .onChange(function (value) {
            _this.plugin.settings.editorFont = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Custom monospace font')
            .setDesc('Used for code blocks, front matter, etc')
            .addText(function (text) { return text.setPlaceholder('')
            .setValue((_this.plugin.settings.monoFont || '') + '')
            .onChange(function (value) {
            _this.plugin.settings.monoFont = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Custom UI font')
            .setDesc('Used for UI elements')
            .addText(function (text) { return text.setPlaceholder('')
            .setValue((_this.plugin.settings.uiFont || '') + '')
            .onChange(function (value) {
            _this.plugin.settings.uiFont = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        containerEl.createEl('br');
        containerEl.createEl('h3', { text: 'Support development' });
        var div = containerEl.createEl('div', {
            cls: 'minimal-donation',
        });
        var donateText = document.createElement('p');
        donateText.appendText('If you enjoy Minimal Theme, consider supporting its development using the links below:');
        div.appendChild(donateText);
        var parser = new DOMParser();
        div.appendChild(createDonateButton('https://www.buymeacoffee.com/kepano', parser.parseFromString(buyMeACoffee, 'text/xml').documentElement));
        div.appendChild(createDonateButton('https://www.patreon.com/bePatron?u=499711', parser.parseFromString(patreon, 'text/xml').documentElement));
    };
    return MinimalSettingTab;
}(obsidian.PluginSettingTab));
var createDonateButton = function (link, img) {
    var a = document.createElement('a');
    a.setAttribute('href', link);
    a.addClass('minimal-donate-button');
    a.appendChild(img);
    return a;
};