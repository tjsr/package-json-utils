import fs from 'fs';
import path from "path";

export const findPackageJson = (startDir?: string): string => {
  const __dirname = import.meta.dirname;
  let searchPath = startDir ?? __dirname;

  let levelsUpToSearch = 2;
  const currentLevel = 0;

  do {
    const packageJsonPath = path.resolve(searchPath, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      return packageJsonPath;
    }
    searchPath = path.resolve(searchPath, '..');
  } while (currentLevel < levelsUpToSearch++);

  throw new Error('Could not find package.json one or two levels below ' + startDir);
};
