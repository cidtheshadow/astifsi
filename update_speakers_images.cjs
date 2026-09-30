const fs = require('fs');

let confData = fs.readFileSync('src/data/conferenceData.ts', 'utf8');

confData = confData.replace(
  /name: "Dr\. Lakhvinder Kaur",[\s\S]*?avatarInitials: "LK"/,
  match => match.replace('avatarInitials: "LK"', 'image: "/speakers/dr-lakhvinder-kaur.png",\n    avatarInitials: "LK"')
);

confData = confData.replace(
  /name: "Mr\. Satinder Singh Nandra",[\s\S]*?avatarInitials: "SN"/,
  match => match.replace('avatarInitials: "SN"', 'image: "/speakers/mr-satinder-singh-nandra.jpg",\n    avatarInitials: "SN"')
);

fs.writeFileSync('src/data/conferenceData.ts', confData);
console.log('Images updated.');
