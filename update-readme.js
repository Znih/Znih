const fs = require('fs');
const path = require('path');

// Backup4read
const backupPath = `${readmePath}.backup`;
fs.copyFileSync(readmePath, backupPath);
console.log(`Backup created at ${backupPath}`);

// Lese die aktuelle README.md
const readmePath = path.join(__dirname, 'README.md');
let readmeContent = fs.readFileSync(readmePath, 'utf-8');

// Ersetze Platzhalter durch GitHub-Benutzername und Repository-Besitzer
const githubUser = process.env.GITHUB_USER;
const githubOwner = process.env.GITHUB_OWNER;

if (!githubUser || !githubOwner) {
  console.error('Environment variables GITHUB_USER and GITHUB_OWNER are required.');
  process.exit(1); // Exit with a failure code
}

console.log('Successfully updated README.md with GitHub user and owner information.');

readmeContent = readmeContent.replace(/{{GITHUB_USER}}/g, githubUser);
readmeContent = readmeContent.replace(/{{GITHUB_OWNER}}/g, githubOwner);

// Schreibe die aktualisierte README.md zurück
fs.writeFileSync(readmePath, readmeContent);



