import chalk from 'chalk';
import spawn from 'cross-spawn';
import path from 'path';

import * as fs from 'fs';

import * as fse from 'fs-extra';
import * as _ from 'lodash';

// eslint-disable-next-line import/prefer-default-export
export function installYarnModules(projectDir: string, pathToPackage: string) {
  try {
    const packageDirPath = path.resolve(projectDir, pathToPackage);
    process.chdir(packageDirPath);
    spawn.sync('yarn', ['install']);
    process.chdir(projectDir);
  } catch(e) {
    console.error(e);
  }
}

export function copyBuildData(projectDir: string, packageName: string, pathToPackage: string) {
  try {
    const tmpDir = path.join(projectDir, '.create-react-app', packageName, 'build');
    const pkgPath = path.resolve(projectDir, pathToPackage, 'build');
    fse.copySync(pkgPath, tmpDir);
  } catch (e) {
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

export function createDefinesData(projectDir: string, definesData: any) {
  try {
    const definesFile = path.join(projectDir, '.create-react-app', 'defines.json');
    fs.writeFileSync(definesFile, JSON.stringify(definesData, null, 2));
  } catch (e) {
    console.error(
      chalk.red(e),
    );
  }
}
