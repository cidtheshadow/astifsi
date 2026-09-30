const fs = require('fs');
let data = fs.readFileSync('src/components/Header.tsx', 'utf8');

const newNavLinks = `const navLinks: { name: string; page: ActivePage; hash?: string }[] = [
    { name: 'About', page: 'home', hash: '#about' },
    { name: 'Committees', page: 'home', hash: '#committee' },
    { name: 'Focus', page: 'home', hash: '#themes' },
    { name: 'Speakers', page: 'home', hash: '#speakers' },
    { name: 'Highlights', page: 'home', hash: '#highlights' },
    { name: 'Dates', page: 'home', hash: '#deadlines' },
    { name: 'Register', page: 'home', hash: '#registration' },
    { name: 'Local', page: 'departmental-committees' },
    { name: 'Sponsors', page: 'sponsors' },
    { name: 'Venue', page: 'home', hash: '#venue' },
    { name: 'FAQ', page: 'home', hash: '#faqs' },
    { name: 'WFD 26\\'', page: 'wfd' },
  ];`;

data = data.replace(/const navLinks: \{ name: string; page: ActivePage; hash\?: string \}.*?\];/s, newNavLinks);

// Prevent wrapping
data = data.replace(/flex-wrap gap-x-2 gap-y-1/, 'gap-x-1.5 gap-y-1 overflow-x-auto whitespace-nowrap scrollbar-hide');

// And remove horizontal padding from items to save space
data = data.replace(/px-2 rounded/g, 'px-1 rounded');
data = data.replace(/text-\[11px\]/g, 'text-[10.5px] xl:text-[11px]');

fs.writeFileSync('src/components/Header.tsx', data);
