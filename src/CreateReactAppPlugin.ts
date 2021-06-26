import PluginBase from '@electron-forge/plugin-base';
import { asyncOra } from '@electron-forge/async-ora';
import Logger, { Tab } from '@electron-forge/web-multi-logger';

import * as _ from 'lodash';

import debug from 'debug';

import ConfigGenerator from './ConfigGenerator';
import {
  installYarnModules,
  copyBuildData,
} from './ReactAppBuilder';

const d = debug('electron-forge:plugin:create-react-app');

const DEFAULT_LOGGER_PORT = 9000;

export interface ICreateReactAppPlugin {}

export default class CreateReactAppPlugin extends PluginBase<ICreateReactAppPlugin> {
  name = 'create-react-app';

  private projectDir!: string;

  private _configGenerator!: any;

  private loggers: Logger[] = [];

  private loggerPort = DEFAULT_LOGGER_PORT;

  constructor(opts: ICreateReactAppPlugin) {
    super(opts);
    d('__constructor__');

    this.getHook = this.getHook.bind(this);
    this.startLogic = this.startLogic.bind(this);
  }

  get configGenerator() {
    // eslint-disable-next-line no-underscore-dangle
    if (!this._configGenerator) {
      // eslint-disable-next-line no-underscore-dangle
      this._configGenerator = new ConfigGenerator(
        this.config,
      );
    }

    // eslint-disable-next-line no-underscore-dangle
    return this._configGenerator;
  }

  exitHandler = (options: { cleanup?: boolean, exit?: boolean }, err?: Error) => {
    d('exit-handler');

    if (options.cleanup) {
      // console.log('cleanup');
    }

    if (err) console.error(err.stack);
    if (options.exit) process.exit();
  }

  init = (dir: string) => {
    d('init');

    this.setDirectories(dir);

    // eslint-disable-next-line no-unused-vars
    process.on('exit', (_code) => this.exitHandler({ cleanup: true }));
    // eslint-disable-next-line no-unused-vars
    process.on('SIGINT', (_signal) => this.exitHandler({ exit: true }));
  }

  setDirectories = (dir: string) => {
    this.projectDir = dir;
  }

  // eslint-disable-next-line max-len
  private runYarnBuildReactApp = async (path: string): Promise<any | undefined> => new Promise((resolve, reject) => {
    installYarnModules(path);
    copyBuildData(path);
  });

  buildReactApps = async () => {
    await asyncOra('Building CRA Apps', async () => {
      // @ts-ignore
      _.forEach(this.configGenerator.getModules(), async (module) => {
        await this.runYarnBuildReactApp(
          module.path,
        );
      });
    });
  }

  getHook(name: string) {
    switch (name) {
      case 'prePackage':
        return async () => {
          await this.buildReactApps();
        };
      default:
        return null;
    }
  }

  async startLogic(): Promise<false> {
    const logger = new Logger(this.loggerPort);
    this.loggers.push(logger);
    await logger.start();
    return false;
  }
}
