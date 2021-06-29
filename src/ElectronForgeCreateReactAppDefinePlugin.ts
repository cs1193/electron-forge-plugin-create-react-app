
import _ from 'lodash';
import webpack from 'webpack';

import CreateReactAppPlugin from './CreateReactAppPlugin';

export default function WebpackDefinePlugin() {
  let definesData = CreateReactAppPlugin.readDefinesData();
  definesData = _.cloneDeep(definesData);
  return new webpack.DefinePlugin(definesData);
}
