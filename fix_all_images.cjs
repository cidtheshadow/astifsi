const fs = require('fs');

let confData = fs.readFileSync('src/data/conferenceData.ts', 'utf8');

const replacements = [
  { name: 'Dr. Baljit Singh', image: '/speakers/dr-baljit-singh.jpg' },
  { name: 'Dr. Tarsem Chand Mittal', image: '/speakers/tarsem.jpg' },
  { name: 'Dr. Kawaljit Singh Sandhu', image: '/speakers/kawaljit-singh.jpeg' },
  { name: 'Dr. Davinder Pal Singh Oberoi', image: '/speakers/davinder.jpg' },
  { name: 'Dr. Lakhvinder Kaur', image: '/speakers/lakhvinder.png' },
  { name: 'Mr. Satinder Singh Nandra', image: '/speakers/satinder.jpg' },
  { name: 'Mr. Paramdeep Singh Ghuman', image: '/speakers/paramdeep-ghuman.jpeg' },
  { name: 'Satyam Gupta', image: '/speakers/satyam.jpg' }
];

replacements.forEach(({ name, image }) => {
  const regex = new RegExp(`name:\\s*"${name}",[\\s\\S]*?avatarInitials:\\s*"[A-Z]+"`);
  confData = confData.replace(regex, match => {
    // If it already has an image line, replace it. Otherwise, add it before avatarInitials.
    if (match.includes('image:')) {
      return match.replace(/image:\s*".*?"/, `image: "${image}"`);
    } else {
      return match.replace(/avatarInitials:/, `image: "${image}",\n    avatarInitials:`);
    }
  });
});

fs.writeFileSync('src/data/conferenceData.ts', confData);
console.log('All speaker images correctly mapped.');
