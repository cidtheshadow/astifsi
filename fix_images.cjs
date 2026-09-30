const fs = require('fs');

let confData = fs.readFileSync('src/data/conferenceData.ts', 'utf8');

// We'll add the image property right after the iconName property to be safe.
confData = confData.replace(
  /iconName: "BookOpen"\n\s*},/,
  'iconName: "BookOpen",\n      image: "/wfd/food-art.png"\n    },'
);

confData = confData.replace(
  /iconName: "Utensils"\n\s*},/,
  'iconName: "Utensils",\n      image: "/wfd/food-art.png"\n    },'
);

confData = confData.replace(
  /iconName: "Presentation"\n\s*},/,
  'iconName: "Presentation",\n      image: "/wfd/creative-oral-presentation.png"\n    },'
);

confData = confData.replace(
  /iconName: "HelpCircle"\n\s*},/,
  'iconName: "HelpCircle",\n      image: "/wfd/quiz-competition.png"\n    },'
);

confData = confData.replace(
  /iconName: "Palette"\n\s*},/,
  'iconName: "Palette",\n      image: "/wfd/poster-competition.png"\n    },'
);

fs.writeFileSync('src/data/conferenceData.ts', confData);

console.log('Images added back successfully.');
