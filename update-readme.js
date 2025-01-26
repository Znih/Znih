const fs = require('fs');
const path = require('path');

// Lese die aktuelle README.md
const readmePath = path.join(__dirname, 'README.md');
let readmeContent = fs.readFileSync(readmePath, 'utf-8');

// Ersetze Platzhalter durch GitHub-Benutzername und Repository-Besitzer
const githubUser = process.env.GITHUB_USER;
const githubOwner = process.env.GITHUB_OWNER;

readmeContent = readmeContent.replace(/{{GITHUB_USER}}/g, githubUser);
readmeContent = readmeContent.replace(/{{GITHUB_OWNER}}/g, githubOwner);

// Schreibe die aktualisierte README.md zurück
fs.writeFileSync(readmePath, readmeContent);

