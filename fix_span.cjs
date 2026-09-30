const fs = require('fs');
let data = fs.readFileSync('src/components/WFDCelebrations.tsx', 'utf8');

data = data.replace(/<div className="font-bold text-xs leading-snug line-clamp-1">\{event.title\}<\/div>\s*<\/span>/g, '<div className="font-bold text-xs leading-snug line-clamp-2">{event.title}</div>');

fs.writeFileSync('src/components/WFDCelebrations.tsx', data);
