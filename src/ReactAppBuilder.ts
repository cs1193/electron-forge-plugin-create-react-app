import spawn from 'cross-spawn';

// eslint-disable-next-line import/prefer-default-export
export function installYarnModules(path: string) {
  process.chdir(path);
  spawn.sync('yarn');
  process.chdir('../../');
}
