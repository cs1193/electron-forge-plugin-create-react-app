import spawn from 'cross-spawn';
import path from 'path';

import * as fse from 'fs-extra';
import * as _ from 'lodash';

// eslint-disable-next-line import/prefer-default-export
export function installYarnModules(projectDir: string, pathToPackage: string) {
  try {
    console.log('installYarnModules', projectDir, pathToPackage);
    const packageDirPath = path.resolve(projectDir, pathToPackage);

    console.log('installYarnModules - 2', packageDirPath);

    process.chdir(packageDirPath);
    spawn.sync('yarn', ['install']);
    process.chdir(projectDir);
  } catch(e) {
    console.error(e);
  }
}

export function copyBuildData(projectDir: string, pathToPackage: string) {
  try {
    console.log('copyBuildData', projectDir, pathToPackage);
    const directoryName = path.basename(pathToPackage);
    const tmpDir = path.join(projectDir, '.create-react-app', directoryName, 'build');
    const pkgPath = path.resolve(projectDir, pathToPackage, 'build');

    console.log('copyBuildData - 2', directoryName, tmpDir, pkgPath);

    fse.copySync(pkgPath, tmpDir);
  } catch(e) {
    console.error(e);
  }
}

// eslint-disable-next-line class-methods-use-this
export function toEnvironmentVariable(name: string): string {
  const suffix: string = '_REACT_APP_ENTRY';
  return `${_.replace(_.toUpper(name), / /g, '_')}${suffix}`;
}

export function lernaBootstrap(projectDir: string) {
  try {
    process.chdir(projectDir);
    spawn.sync('lerna', ['bootstrap']);
  } catch (e) {
    console.error(e);
  }
}
