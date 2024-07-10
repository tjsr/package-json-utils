import { findPackageJson } from "./findPackageJson.js";
import fs from "fs";

export const getVersionFromPackageJson = async (packageJsonPath?: string|undefined): Promise<string> => {
  if (!packageJsonPath) {
    packageJsonPath = findPackageJson();
  } else if (fs.lstatSync(packageJsonPath).isDirectory()) {
    packageJsonPath = findPackageJson(packageJsonPath);
  } else if (!fs.existsSync(packageJsonPath)) {
    throw new Error(`Path provided does not exist: ${packageJsonPath}`);
  }
  
  return new Promise((resolve, reject) => {
    fs.readFile(packageJsonPath, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      const packageJson = JSON.parse(data);
      resolve(packageJson.version);
    });
  });
};
