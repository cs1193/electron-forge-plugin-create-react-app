import spawn from 'cross-spawn';
import path from 'path';
import * as fse from 'fs-extra';

// eslint-disable-next-line import/prefer-default-export
export function installYarnModules(pathToPackage: string) {
  // eslint-disable-next-line no-console
  console.log(pathToPackage);
  const directoryName = path.basename(pathToPackage);
  const packageDirPath = path.join(process.cwd(), '../../packages', directoryName);
  // eslint-disable-next-line no-console
  console.log(packageDirPath);

  process.chdir(packageDirPath);
  spawn.sync('yarn');
  process.chdir('../../');
}

export function copyBuildData(pathToPackage: string) {
  // eslint-disable-next-line no-console
  console.log('copyBuildData', process.cwd());
  const tmpDir = path.join(process.cwd(), '.tmp');
  const directoryName = path.basename(pathToPackage);
  const tmpDirPath = path.join(tmpDir, directoryName);

  fse.copySync(pathToPackage, tmpDirPath);
}
