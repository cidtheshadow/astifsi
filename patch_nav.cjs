const fs = require('fs');
let data = fs.readFileSync('src/components/Header.tsx', 'utf8');

const newNavLinks = `const navLinks: { name: string; page: ActivePage; hash?: string }[] = [
    { name: 'About', page: 'home', hash: '#about' },
    { name: 'Committees', page: 'home', hash: '#committee' },
    { name: 'Focus Areas', page: 'home', hash: '#themes' },
    { name: 'Invited Speakers', page: 'home', hash: '#speakers' },
    { name: 'Highlights', page: 'home', hash: '#highlights' },
    { name: 'Important Dates', page: 'home', hash: '#deadlines' },
    { name: 'Registration', page: 'home', hash: '#registration' },
    { name: 'Local Committees', page: 'departmental-committees' },
    { name: 'Sponsors', page: 'sponsors' },
    { name: 'Venue & Location', page: 'home', hash: '#venue' },
    { name: 'FAQ', page: 'home', hash: '#faqs' },
    { name: 'World Food Day 2026', page: 'wfd' },
  ];`;

data = data.replace(/const navLinks: \{ name: string; page: ActivePage; hash\?: string \}.*?\];/s, newNavLinks);

fs.writeFileSync('src/components/Header.tsx', data);
