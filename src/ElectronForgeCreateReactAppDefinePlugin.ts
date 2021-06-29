/* eslint-disable no-new */
/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import webpack from 'webpack';

import CreateReactAppPlugin from './CreateReactAppPlugin';

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

export default function WebpackDefinePlugin() {
  let definesData = CreateReactAppPlugin.readDefinesData();
  definesData = _.cloneDeep(definesData);
  return new webpack.DefinePlugin(definesData);
}
