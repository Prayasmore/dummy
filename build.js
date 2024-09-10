const fs = require('fs');
const { execSync } = require('child_process');
const semver = require('semver');

// Read current version from package.json
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
let currentVersion = packageJson.version;

// Bump version (patch)
const newVersion = semver.inc(currentVersion, 'patch');

// Update package.json with new version
packageJson.version = newVersion;
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

// Run build
execSync('npm run build', { stdio: 'inherit' });

// Commit changes
execSync('git add .');
execSync('git commit -m \"Build: ' + newVersion + '\"');

// Tag the commit
execSync('git tag v' + newVersion);

console.log('Build completed and tagged as v' + newVersion);