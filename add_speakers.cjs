const fs = require('fs');

let confData = fs.readFileSync('src/data/conferenceData.ts', 'utf8');

const speakersData = `
export const SPEAKERS_DATA = [
  {
    name: "Dr. Baljit Singh",
    designation: "Head, Food Science & Technology",
    affiliation: "Punjab Agriculture University",
    location: "Ludhiana, Punjab, India",
    image: "/speakers/dr-baljit-singh.jpg",
    avatarInitials: "BS"
  },
  {
    name: "Dr. Tarsem Chand Mittal",
    designation: "Principal Extension Scientist-cum-Head, Processing & Food Engineering",
    affiliation: "Punjab Agriculture University",
    location: "Ludhiana, Punjab, India",
    image: "/speakers/dr-tarsem-chand-mittal.jpg",
    avatarInitials: "TM"
  },
  {
    name: "Dr. Kawaljit Singh Sandhu",
    designation: "Professor & HOD, Food Science and Technology",
    affiliation: "Maharaja Ranjit Singh Punjab Technical University (MRSPTU)",
    location: "Bathinda, Punjab, India",
    image: "/speakers/dr-kawaljit-singh.jpg",
    avatarInitials: "KS"
  },
  {
    name: "Dr. Davinder Pal Singh Oberoi",
    designation: "Associate Professor",
    affiliation: "Chandigarh University",
    location: "Mohali, Punjab, India",
    image: "/speakers/dr-davinder-pal.jpg",
    avatarInitials: "DO"
  },
  {
    name: "Dr. Lakhvinder Kaur",
    designation: "Professor, Food Science and Technology, Research Director-Life science",
    affiliation: "Manav Rachna International Institute of Research and studies",
    location: "Faridabad, Haryana, India",
    avatarInitials: "LK"
  },
  {
    name: "Mr. Satinder Singh Nandra",
    designation: "Vice President- Technical",
    affiliation: "Coca-Cola, Kandhari Global Beverages Pvt. Ltd.",
    location: "Gurugram, Haryana, India",
    avatarInitials: "SN"
  },
  {
    name: "Mr. Paramdeep Shingh Ghuman",
    designation: "Country Manager",
    affiliation: "Newly Weds Foods",
    location: "Ahmedabad, Gujarat, India",
    avatarInitials: "PG"
  },
  {
    name: "Satyam Gupta",
    designation: "Associate director",
    affiliation: "PepsiCo",
    location: "Gurgaon, Haryana, India",
    avatarInitials: "SG"
  }
];
`;

confData = confData + '\n' + speakersData;
fs.writeFileSync('src/data/conferenceData.ts', confData);
console.log('Speakers data added.');
