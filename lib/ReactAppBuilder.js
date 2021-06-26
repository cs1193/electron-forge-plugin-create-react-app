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
exports.createDefinesFile = exports.toEnvironmentVariable = exports.copyBuildData = exports.installYarnModules = void 0;
const cross_spawn_1 = __importDefault(require("cross-spawn"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const fse = __importStar(require("fs-extra"));
const _ = __importStar(require("lodash"));
// eslint-disable-next-line import/prefer-default-export
function installYarnModules(pathToPackage) {
    // const packageDirPath = path.join(process.cwd(), '../../packages', directoryName);
    const appDir = process.cwd();
    const packageDirPath = path_1.default.join(process.cwd(), pathToPackage);
    process.chdir(packageDirPath);
    cross_spawn_1.default.sync('yarn');
    process.chdir(appDir);
}
exports.installYarnModules = installYarnModules;
function copyBuildData(pathToPackage) {
    const tmpDir = path_1.default.join(process.cwd(), '.create-react-app');
    const directoryName = path_1.default.basename(pathToPackage);
    const tmpDirPath = path_1.default.join(tmpDir, directoryName);
    const pkgPath = path_1.default.join(process.cwd(), 'packages', directoryName);
    fse.copySync(pkgPath, tmpDirPath);
}
exports.copyBuildData = copyBuildData;
// eslint-disable-next-line class-methods-use-this
function toEnvironmentVariable(name) {
    const suffix = '_REACT_APP_ENTRY';
    return `${_.replace(_.toUpper(name), / /g, '_')}${suffix}`;
}
exports.toEnvironmentVariable = toEnvironmentVariable;
function createDefinesFile(data) {
    const pathToDefinesFile = path_1.default.join(process.cwd(), '.create-react-app', 'defines.json');
    fs_1.default.writeFileSync(pathToDefinesFile, JSON.stringify(data, null, 2));
}
exports.createDefinesFile = createDefinesFile;
//# sourceMappingURL=ReactAppBuilder.js.map