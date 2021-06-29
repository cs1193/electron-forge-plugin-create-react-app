import spawn from 'cross-spawn';
import path from 'path';

import * as fse from 'fs-extra';
import * as _ from 'lodash';

// eslint-disable-next-line import/prefer-default-export
export function installYarnModules(projectDir: string, pathToPackage: string) {
  const appDir = process.cwd();
  const packageDirPath = path.resolve(projectDir, pathToPackage);

  process.chdir(packageDirPath);
  spawn.sync('yarn', ['install']);
  process.chdir(appDir);
}

export function copyBuildData(projectDir: string, pathToPackage: string) {
  const directoryName = path.basename(pathToPackage);
  const tmpDir = path.resolve(projectDir, '.create-react-app', directoryName, 'build');
  const pkgPath = path.resolve(projectDir, pathToPackage, 'build');
  fse.copySync(pkgPath, tmpDir);
}

// eslint-disable-next-line class-methods-use-this
export function toEnvironmentVariable(name: string): string {
  const suffix: string = '_REACT_APP_ENTRY';
  return `${_.replace(_.toUpper(name), / /g, '_')}${suffix}`;
}
