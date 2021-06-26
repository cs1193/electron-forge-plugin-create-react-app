import spawn from 'cross-spawn';
import path from 'path';
import * as fse from 'fs-extra';

// eslint-disable-next-line import/prefer-default-export
export function installYarnModules(pathToPackage: string) {
  const directoryName = path.basename(pathToPackage);
  const packageDirPath = path.join(process.cwd(), '../../packages', directoryName);

  process.chdir(packageDirPath);
  spawn.sync('yarn');
  process.chdir('../../');
}

export function copyBuildData(pathToPackage: string) {
  const tmpDir = path.join(process.cwd(), '.tmp');
  const directoryName = path.basename(pathToPackage);
  const tmpDirPath = path.join(tmpDir, directoryName);
  const pkgPath = path.join(process.cwd(), 'packages', directoryName);

  fse.copySync(pkgPath, tmpDirPath);
}
