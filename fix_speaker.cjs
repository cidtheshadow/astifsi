const fs = require('fs');
let data = fs.readFileSync('src/data/conferenceData.ts', 'utf8');

data = data.replace(/avatarInitials: "SG"\n  }\n  \{/g, 'avatarInitials: "SG"\n  },\n  {');

fs.writeFileSync('src/data/conferenceData.ts', data);
