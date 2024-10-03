const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDir)) {
    
    const files = fs.readdirSync(logsDir);

    
    files.forEach(file => {
        const filePath = path.join(logsDir, file);
        fs.unlinkSync(filePath);  // Remove the file
        console.log(`Deleted file: ${file}`);
    });

    fs.rmdirSync(logsDir);
    console.log('Logs directory removed.');
} else {
    console.log('Logs directory does not exist.');
}
