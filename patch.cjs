const fs = require('fs');
let data = fs.readFileSync('src/data/conferenceData.ts', 'utf8');

// For "Student Workshop on Food Innovation", change image to "/wfd/food-art.png"
data = data.replace(
  /title: "Student Workshop on Food Innovation",[\s\S]*?image: "\/wfd\/scan-to-register.png",/m,
  (match) => match.replace('"/wfd/scan-to-register.png"', '"/wfd/food-art.png"')
);

// For "Innovative Food Art", change image to "/wfd/new-food-art.jpg"
data = data.replace(
  /title: "Innovative Food Art",[\s\S]*?image: "\/wfd\/food-art.png",/m,
  (match) => match.replace('"/wfd/food-art.png"', '"/wfd/new-food-art.jpg"')
);

fs.writeFileSync('src/data/conferenceData.ts', data);
