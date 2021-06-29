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
exports.readDefinesData = exports.createDefinesData = exports.lernaBootstrap = exports.toEnvironmentVariable = exports.copyBuildData = exports.installYarnModules = void 0;
const chalk_1 = __importDefault(require("chalk"));
const cross_spawn_1 = __importDefault(require("cross-spawn"));
const path_1 = __importDefault(require("path"));
const fs = __importStar(require("fs"));
const fse = __importStar(require("fs-extra"));
const _ = __importStar(require("lodash"));
// eslint-disable-next-line import/prefer-default-export
function installYarnModules(projectDir, pathToPackage) {
    try {
        const packageDirPath = path_1.default.resolve(projectDir, pathToPackage);
        process.chdir(packageDirPath);
        cross_spawn_1.default.sync('yarn', ['install']);
        process.chdir(projectDir);
    }
    catch (e) {
        console.error(e);
    }
}
exports.installYarnModules = installYarnModules;
function copyBuildData(projectDir, packageName, pathToPackage) {
    try {
        const tmpDir = path_1.default.join(projectDir, '.webpack', packageName, 'build');
        const pkgPath = path_1.default.resolve(projectDir, pathToPackage, 'build');
        fse.copySync(pkgPath, tmpDir);
    }
    catch (e) {
        console.error(e);
    }
}
exports.copyBuildData = copyBuildData;
// eslint-disable-next-line class-methods-use-this
function toEnvironmentVariable(name) {
    const suffix = '_REACT_APP_ENTRY';
    return `${_.replace(_.toUpper(name), / /g, '_')}${suffix}`;
}
exports.toEnvironmentVariable = toEnvironmentVariable;
function lernaBootstrap(projectDir) {
    try {
        process.chdir(projectDir);
        cross_spawn_1.default.sync('lerna', ['bootstrap']);
    }
    catch (e) {
        console.error(e);
    }
}
exports.lernaBootstrap = lernaBootstrap;
function createDefinesData(projectDir, definesData) {
    try {
        const definesFile = path_1.default.join(projectDir, '.webpack', 'defines.json');
        fs.writeFileSync(definesFile, JSON.stringify(definesData, null, 2));
    }
    catch (e) {
        console.error(chalk_1.default.red(e));
    }
}
exports.createDefinesData = createDefinesData;
function readDefinesData(projectDir) {
    try {
        const definesFile = path_1.default.join(projectDir, '.webpack', 'defines.json');
        const readData = fs.readFileSync(definesFile);
        return definesFile && JSON.parse(readData.toString());
    }
    catch (e) {
        console.error(chalk_1.default.red(e));
        return false;
    }
}
exports.readDefinesData = readDefinesData;
//# sourceMappingURL=ReactAppBuilder.js.map