const fs = require('fs');
const path = require('path');


const logsDir = path.join(__dirname, 'Logs');


if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log('Logs directory created.');
}


process.chdir(logsDir);

// Create 10 log files
for (let i = 0; i < 10; i++) {
    const fileName = `log${i + 1}.txt`;
    const filePath = path.join(logsDir, fileName);
    
    // Write some text into the file
    fs.writeFileSync(filePath, `This is log file number ${i + 1}`);
    console.log(`Created file: ${fileName}`);
}
