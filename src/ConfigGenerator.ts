import debug from 'debug';
import * as _ from 'lodash';

const d = debug('electron-forge:plugin:create-react-app:config-generator');

type ReactAppModule = Record<string, string>

interface IConfigGenerator {
  modules: ReactAppModule[]
}

export default class ConfigGenerator<IConfigGenerator> {
  private config: IConfigGenerator;

  constructor(config: IConfigGenerator) {
    this.config = config;

    d('__constructor__');
  }

  getModules() {
    // @ts-ignore
    return this.config.modules;
  }

  // eslint-disable-next-line class-methods-use-this
  toEnvironmentVariable(name: string): string {
    const suffix: string = '_REACT_APP_ENTRY';
    return `${_.replace(_.toUpper(name), / /g, '_')}${suffix}`;
  }
}
