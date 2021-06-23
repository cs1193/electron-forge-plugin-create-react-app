import PluginBase from '@electron-forge/plugin-base';

import debug from 'debug';

const d = debug('electron-forge:plugin:create-react-app');

export interface ICreateReactAppPlugin {}

export default class CreateReactAppPlugin extends PluginBase<ICreateReactAppPlugin> {
  name = 'create-react-app';

  private projectDir!: string;

  constructor(opts: ICreateReactAppPlugin) {
    super(opts);
    d('__constructor__');

    this.getHook = this.getHook.bind(this);
    this.startLogic = this.startLogic.bind(this);
  }

  exitHandler = (options: { cleanup?: boolean, exit?: boolean }, err?: Error) => {
    d('exit-handler');

    if (options.cleanup) {
      console.log('cleanup');
    }

    if (err) console.error(err.stack);
    if (options.exit) process.exit();
  }

  init = (dir: string) => {
    d('init');

    this.setDirectories(dir);

    process.on('exit', (_code) => this.exitHandler({ cleanup: true }));
    process.on('SIGINT', (_signal) => this.exitHandler({ exit: true }));
  }

  setDirectories = (dir: string) => {
    this.projectDir = dir;
  }

  buildReactApp = async () => {

  }

  getHook(name: string) {
    switch(name) {
      case 'prePackage':
        return async () => {

        }
      default:
        return null;
    }
  }

  async startLogic(): Promise<false> {
    return false;
  }
}
