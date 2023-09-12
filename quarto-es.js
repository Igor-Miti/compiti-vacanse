const fs = require('fs');
const filePath = process.argv[2];
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading the file: ${err}`);
    process.exit(1);
  }

  const newlineCount = (data.match(/\n/g) || []).length;
  console.log(newlineCount);
});
