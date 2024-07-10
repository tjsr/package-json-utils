import { findFileUpwards } from '@tjsr/fs-utils';

export const findPackageJson = (startDir?: string, levelsUpToSearch: number = 2): string => {
  return findFileUpwards('package.json', levelsUpToSearch, startDir);
};
