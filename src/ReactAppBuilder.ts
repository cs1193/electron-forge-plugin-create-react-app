import spawn from 'cross-spawn';
import path from 'path';
import fs from 'fs';

import * as fse from 'fs-extra';
import * as _ from 'lodash';

// eslint-disable-next-line import/prefer-default-export
export function installYarnModules(pathToPackage: string) {
  // const packageDirPath = path.join(process.cwd(), '../../packages', directoryName);
  const appDir = process.cwd();
  const packageName: string = path.basename(pathToPackage);
  const packageDirPath = path.resolve(__dirname, 'packages', packageName);

  console.log(process.cwd(), packageDirPath);

  process.chdir(packageDirPath);
  spawn.sync('yarn');
  process.chdir(appDir);
}

export function copyBuildData(pathToPackage: string) {
  const tmpDir = path.join(process.cwd(), '.create-react-app');
  const directoryName = path.basename(pathToPackage);
  const tmpDirPath = path.join(tmpDir, directoryName);
  const pkgPath = path.join(process.cwd(), 'packages', directoryName);

  fse.copySync(pkgPath, tmpDirPath);
}

// eslint-disable-next-line class-methods-use-this
export function toEnvironmentVariable(name: string): string {
  const suffix: string = '_REACT_APP_ENTRY';
  return `${_.replace(_.toUpper(name), / /g, '_')}${suffix}`;
}
