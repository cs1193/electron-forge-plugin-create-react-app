import PluginBase from '@electron-forge/plugin-base';

import debug from 'debug';

const d = debug('electron-forge:plugin:create-react-app');

export interface ICreateReactAppPlugin {}

export default class CreateReactAppPlugin extends PluginBase<ICreateReactAppPlugin> {
  name = 'create-react-app';

  constructor(opts: ICreateReactAppPlugin) {
    super(opts);
    d('create-react-app:init');

    this.getHook = this.getHook.bind(this);
    this.startLogic = this.startLogic.bind(this);
  }

  getHook(name: string) {
    switch(name) {
      default:
        return null;
    }
  }

  async startLogic(): Promise<false> {
    return false;
  }
}
