const fs = require('fs');

const filePath = process.argv[2];

const data = fs.readFileSync(filePath, 'utf8');
const newlineCount = (data.match(/\n/g) || []).length;
console.log(newlineCount);

