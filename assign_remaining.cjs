const fs = require('fs');

let confData = fs.readFileSync('src/data/conferenceData.ts', 'utf8');

confData = confData.replace(
  /name: "Satyam Gupta",[\s\S]*?avatarInitials: "SG"/,
  match => match.replace('avatarInitials: "SG"', 'image: "/speakers/satyam-gupta.jpg",\n    avatarInitials: "SG"')
);

confData = confData.replace(
  /name: "Mr\. Paramdeep Singh Ghuman",[\s\S]*?avatarInitials: "PG"/,
  match => match.replace('avatarInitials: "PG"', 'image: "/speakers/mr-paramdeep-singh-ghuman.jpg",\n    avatarInitials: "PG"')
);

fs.writeFileSync('src/data/conferenceData.ts', confData);
console.log('Images updated.');
