"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const webpack_1 = __importDefault(require("webpack"));
const CreateReactAppPlugin_1 = __importDefault(require("./CreateReactAppPlugin"));
function WebpackDefinePlugin() {
    let definesData = CreateReactAppPlugin_1.default.readDefinesData();
    definesData = lodash_1.default.cloneDeep(definesData);
    return new webpack_1.default.DefinePlugin(definesData);
}
exports.default = WebpackDefinePlugin;
//# sourceMappingURL=ElectronForgeCreateReactAppDefinePlugin.js.map