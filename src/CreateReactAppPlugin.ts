import path from 'path';
import * as fs from 'fs';

import PluginBase from '@electron-forge/plugin-base';
import { asyncOra } from '@electron-forge/async-ora';

import * as _ from 'lodash';
import spawn from 'cross-spawn';

import debug from 'debug';

import {
  installYarnModules,
  copyBuildData,
  toEnvironmentVariable,
  lernaBootstrap,
  createDefinesData
} from './ReactAppBuilder';

const d = debug('electron-forge:plugin:create-react-app');

export interface ICreateReactAppPlugin {}

export default class CreateReactAppPlugin extends PluginBase<ICreateReactAppPlugin> {
  name = 'create-react-app';

  private projectDir!: string;

  private craDir!: string;

  private definesData: any;

  constructor(opts: ICreateReactAppPlugin) {
    super(opts);
    d('__constructor__');

    this.getHook = this.getHook.bind(this);
    this.startLogic = this.startLogic.bind(this);

    this.definesData = {};
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

    // eslint-disable-next-line no-unused-vars
    process.on('exit', (_code) => this.exitHandler({ cleanup: true }));
    // eslint-disable-next-line no-unused-vars
    process.on('SIGINT', (_signal) => this.exitHandler({ exit: true }));
  }

  setDirectories = (dir: string) => {
    this.projectDir = dir;
    this.craDir = path.resolve(dir, '.create-react-app');
  }

  // eslint-disable-next-line max-len
  private runYarnBuildReactApp = async (module: any): Promise<any | undefined> => new Promise((resolve, reject) => {
    try {
      const defineName: string = toEnvironmentVariable(module.name);
      console.log('runYarnBuild', this.projectDir, module, defineName);
      installYarnModules(this.projectDir, module.path);
      copyBuildData(this.projectDir, module.path);

      this.definesData[defineName] = `.create-react-app/${module.name}/index.html`;

      resolve(defineName);
    } catch (e) {
      reject(e);
    }
  });

  buildReactApps = async () => {
    await asyncOra('Building CRA Apps', async () => {
      // @ts-ignore
      _.forEach(this.config.modules, async (module) => {
        await this.runYarnBuildReactApp(
          module,
        );
      });

      createDefinesData(this.projectDir, this.definesData);
    });
  }

  getHook(name: string) {
    switch (name) {
      case 'prePackage':
        return async () => {
          lernaBootstrap(this.projectDir);
          await this.buildReactApps();
        };
      default:
        return null;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async startLogic(): Promise<false> {
    return false;
  }
}
