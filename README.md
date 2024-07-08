# package-json-utils

Simple shared utilities that are used in multiple projects for reading data from a package.json file.

This is usually to get the version number from package.json to ensure it matches what's been embedded in to a CLI tool prior to publishing.

Currently provides two methods:

- getVersionFromPackageJson - parse package.json and return the `version` field
- findPackageJson - Searches directories upwards up to find package.json.
