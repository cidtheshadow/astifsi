const fs = require('fs');
const path = '/Users/tanushsingla/Downloads/enx/foodu/src/data/conferenceData.ts';
let code = fs.readFileSync(path, 'utf8');

// Change Ashmita Mittal to Ashmita Uppal
code = code.replace(/Ashmita Mittal/g, 'Ashmita Uppal');

// Add studentMembers to LocalDepartmentalCommittee interface
code = code.replace(/studentCoordinators\?:\s*string\[\];/g, 'studentCoordinators?: string[];\n  studentMembers?: string[];');

// Split studentCoordinators
code = code.replace(/studentCoordinators:\s*\[([\s\S]*?)\]/g, (match, arrayContent) => {
    let arr;
    try {
        arr = eval(`[${arrayContent}]`);
    } catch(e) {
        return match;
    }
    
    if (arr.length <= 1) return match;
    const coordinator = arr[0];
    const members = arr.slice(1);
    
    return `studentCoordinators: ["${coordinator}"],\n    studentMembers: [${members.map(m => `"${m}"`).join(', ')}]`;
});

fs.writeFileSync(path, code);
