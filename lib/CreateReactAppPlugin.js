"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_base_1 = __importDefault(require("@electron-forge/plugin-base"));
const async_ora_1 = require("@electron-forge/async-ora");
const web_multi_logger_1 = __importDefault(require("@electron-forge/web-multi-logger"));
// import spawn from 'cross-spawn';
const debug_1 = __importDefault(require("debug"));
const d = debug_1.default('electron-forge:plugin:create-react-app');
const DEFAULT_LOGGER_PORT = 9000;
class CreateReactAppPlugin extends plugin_base_1.default {
    constructor(opts) {
        super(opts);
        this.name = 'create-react-app';
        this.loggers = [];
        this.loggerPort = DEFAULT_LOGGER_PORT;
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
            process.on('exit', (_code) => this.exitHandler({ cleanup: true }));
            process.on('SIGINT', (_signal) => this.exitHandler({ exit: true }));
        };
        this.setDirectories = (dir) => {
            this.projectDir = dir;
        };
        this.runYarnBuildReactApp = async () => new Promise((resolve, reject) => {
        });
        this.buildReactApps = async () => {
            await async_ora_1.asyncOra('Building CRA Apps', async () => {
            });
        };
        d('__constructor__');
        this.getHook = this.getHook.bind(this);
        this.startLogic = this.startLogic.bind(this);
    }
    get configGenerator() {
        if (!this._configGenerator) {
            console.log(this._configGenerator, this.config);
        }
        return this._configGenerator;
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
    async startLogic() {
        const logger = new web_multi_logger_1.default(this.loggerPort);
        this.loggers.push(logger);
        await logger.start();
        return false;
    }
}
exports.default = CreateReactAppPlugin;
//# sourceMappingURL=CreateReactAppPlugin.js.map