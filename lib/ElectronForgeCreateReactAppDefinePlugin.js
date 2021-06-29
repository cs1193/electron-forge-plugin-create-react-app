"use strict";
/* eslint-disable import/prefer-default-export */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronForgeCreateReactAppDefinePlugin = void 0;
const lodash_1 = __importDefault(require("lodash"));
const webpack_1 = __importDefault(require("webpack"));
const CreateReactAppPlugin_1 = __importDefault(require("./CreateReactAppPlugin"));
// export default class ElectronForgeCreateReactAppDefinePlugin {
//   apply(compiler: any) {
//     const pluginName = ElectronForgeCreateReactAppDefinePlugin.name;
//     compiler.hooks.compilation.tap(
//       pluginName,
//       () => {
//         let definesData = CreateReactAppPlugin.readDefinesData();
//         definesData = _.cloneDeep(definesData);
//         new webpack.DefinePlugin(definesData);
//       },
//     );
//   }
// }
function ElectronForgeCreateReactAppDefinePlugin() {
    let definesData = CreateReactAppPlugin_1.default.readDefinesData();
    definesData = lodash_1.default.cloneDeep(definesData);
    return new webpack_1.default.DefinePlugin(definesData);
}
exports.ElectronForgeCreateReactAppDefinePlugin = ElectronForgeCreateReactAppDefinePlugin;
//# sourceMappingURL=ElectronForgeCreateReactAppDefinePlugin.js.map