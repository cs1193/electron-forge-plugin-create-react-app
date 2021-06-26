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
exports.copyBuildData = exports.installYarnModules = void 0;
const cross_spawn_1 = __importDefault(require("cross-spawn"));
const path_1 = __importDefault(require("path"));
const fse = __importStar(require("fs-extra"));
// eslint-disable-next-line import/prefer-default-export
function installYarnModules(pathToPackage) {
    // eslint-disable-next-line no-console
    console.log(pathToPackage);
    const directoryName = path_1.default.basename(pathToPackage);
    const packageDirPath = path_1.default.join(process.cwd(), '../../packages', directoryName);
    // eslint-disable-next-line no-console
    console.log(packageDirPath);
    process.chdir(packageDirPath);
    cross_spawn_1.default.sync('yarn');
    process.chdir('../../');
}
exports.installYarnModules = installYarnModules;
function copyBuildData(pathToPackage) {
    // eslint-disable-next-line no-console
    console.log('copyBuildData');
    const tmpDir = path_1.default.join(process.cwd(), '.tmp');
    const directoryName = path_1.default.basename(pathToPackage);
    const tmpDirPath = path_1.default.join(tmpDir, directoryName);
    fse.copySync(pathToPackage, tmpDirPath);
}
exports.copyBuildData = copyBuildData;
//# sourceMappingURL=ReactAppBuilder.js.map