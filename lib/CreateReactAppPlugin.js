"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_base_1 = __importDefault(require("@electron-forge/plugin-base"));
const debug_1 = __importDefault(require("debug"));
const d = debug_1.default('electron-forge:plugin:create-react-app');
class CreateReactAppPlugin extends plugin_base_1.default {
    constructor(opts) {
        super(opts);
        this.name = 'create-react-app';
        this.init = (dir) => {
            console.log(dir);
        };
        this.buildReactApp = async () => {
        };
        d('create-react-app:init');
        this.getHook = this.getHook.bind(this);
        this.startLogic = this.startLogic.bind(this);
    }
    getHook(name) {
        switch (name) {
            case 'prePackage':
                return async () => {
                };
            default:
                return null;
        }
    }
    async startLogic() {
        return false;
    }
}
exports.default = CreateReactAppPlugin;
//# sourceMappingURL=CreateReactAppPlugin.js.map