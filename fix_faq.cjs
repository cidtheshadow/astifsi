const fs = require('fs');
let data = fs.readFileSync('src/App.tsx', 'utf8');

const parts = data.split('<AuthorGuidelinesFAQ />');
if (parts.length > 2) {
    data = parts[0] + '<AuthorGuidelinesFAQ />' + parts[1] + parts.slice(2).join('');
    fs.writeFileSync('src/App.tsx', data);
}
