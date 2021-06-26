import spawn from 'cross-spawn';
import path from 'path';
import * as fse from 'fs-extra';

// eslint-disable-next-line import/prefer-default-export
export function installYarnModules(pathToPackage: string) {
  process.chdir(pathToPackage);
  spawn.sync('yarn');
  process.chdir('../../');
}

export function copyBuildData(pathToPackage: string) {
  const tmpDir = path.join(process.cwd(), '.tmp');
  const directoryName = path.basename(pathToPackage);
  const tmpDirPath = path.join(tmpDir, directoryName);

  fse.copySync(pathToPackage, tmpDirPath);
}
