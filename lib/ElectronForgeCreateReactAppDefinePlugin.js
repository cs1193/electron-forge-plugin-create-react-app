"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-new */
/* eslint-disable class-methods-use-this */
const lodash_1 = __importDefault(require("lodash"));
const webpack_1 = __importDefault(require("webpack"));
const CreateReactAppPlugin_1 = __importDefault(require("./CreateReactAppPlugin"));
class ElectronForgeCreateReactAppDefinePlugin {
    apply(compiler) {
        const pluginName = ElectronForgeCreateReactAppDefinePlugin.name;
        compiler.hooks.compilation.tap(pluginName, () => {
            let definesData = CreateReactAppPlugin_1.default.readDefinesData();
            definesData = lodash_1.default.cloneDeep(definesData);
            new webpack_1.default.DefinePlugin(definesData);
        });
    }
}
// export default function WebpackDefinePlugin() {
//   let definesData = CreateReactAppPlugin.readDefinesData();
//   definesData = _.cloneDeep(definesData);
//   return new webpack.DefinePlugin(definesData);
// }
exports.default = ElectronForgeCreateReactAppDefinePlugin;
//# sourceMappingURL=ElectronForgeCreateReactAppDefinePlugin.js.map