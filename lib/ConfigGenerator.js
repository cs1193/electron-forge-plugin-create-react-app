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
const debug_1 = __importDefault(require("debug"));
const _ = __importStar(require("lodash"));
const d = debug_1.default('electron-forge:plugin:create-react-app:config-generator');
class ConfigGenerator {
    constructor(config) {
        this.config = config;
        d('__constructor__');
    }
    getModules() {
        // @ts-ignore
        return this.config.modules;
    }
    // eslint-disable-next-line class-methods-use-this
    toEnvironmentVariable(name) {
        const suffix = '_REACT_APP_ENTRY';
        return `${_.replace(_.toUpper(name), / /g, '_')}${suffix}`;
    }
}
exports.default = ConfigGenerator;
//# sourceMappingURL=ConfigGenerator.js.map