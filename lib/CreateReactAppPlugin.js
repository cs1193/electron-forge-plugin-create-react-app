"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const plugin_base_1 = __importDefault(require("@electron-forge/plugin-base"));
const async_ora_1 = require("@electron-forge/async-ora");
const _ = __importStar(require("lodash"));
const debug_1 = __importDefault(require("debug"));
const ReactAppBuilder_1 = require("./ReactAppBuilder");
const d = debug_1.default('electron-forge:plugin:create-react-app');
class CreateReactAppPlugin extends plugin_base_1.default {
    constructor(opts) {
        super(opts);
        this.name = 'create-react-app';
        this.exitHandler = (options, err) => {
            d('exit-handler');
            if (options.cleanup) {
                console.log('cleanup');
            }
            if (err)
                console.error(err.stack);
            if (options.exit)
                process.exit();
        };
        this.init = (dir) => {
            d('init');
            this.setDirectories(dir);
            // eslint-disable-next-line no-unused-vars
            process.on('exit', (_code) => this.exitHandler({ cleanup: true }));
            // eslint-disable-next-line no-unused-vars
            process.on('SIGINT', (_signal) => this.exitHandler({ exit: true }));
        };
        this.setDirectories = (dir) => {
            this.projectDir = dir;
            this.craDir = path_1.default.resolve(dir, '.create-react-app');
        };
        // eslint-disable-next-line max-len
        this.runYarnBuildReactApp = async (module) => new Promise((resolve, reject) => {
            try {
                const defineName = ReactAppBuilder_1.toEnvironmentVariable(module.name);
                console.log('runYarnBuild', this.projectDir, module, defineName);
                ReactAppBuilder_1.installYarnModules(this.projectDir, module.path);
                ReactAppBuilder_1.copyBuildData(this.projectDir, module.path);
                resolve(defineName);
            }
            catch (e) {
                reject(e);
            }
        });
        this.buildReactApps = async () => {
            await async_ora_1.asyncOra('Building CRA Apps', async () => {
                // @ts-ignore
                _.forEach(this.config.modules, async (module) => {
                    await this.runYarnBuildReactApp(module);
                });
            });
        };
        d('__constructor__');
        this.getHook = this.getHook.bind(this);
        this.startLogic = this.startLogic.bind(this);
    }
    getHook(name) {
        switch (name) {
            case 'prePackage':
                return async () => {
                    await this.buildReactApps();
                };
            default:
                return null;
        }
    }
    // eslint-disable-next-line class-methods-use-this
    async startLogic() {
        return false;
    }
}
exports.default = CreateReactAppPlugin;
//# sourceMappingURL=CreateReactAppPlugin.js.map