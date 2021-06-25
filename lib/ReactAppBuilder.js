"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.installYarnModules = void 0;
const cross_spawn_1 = __importDefault(require("cross-spawn"));
// eslint-disable-next-line import/prefer-default-export
function installYarnModules(path) {
    process.chdir(path);
    cross_spawn_1.default.sync('yarn');
    process.chdir('../../');
}
exports.installYarnModules = installYarnModules;
//# sourceMappingURL=ReactAppBuilder.js.map