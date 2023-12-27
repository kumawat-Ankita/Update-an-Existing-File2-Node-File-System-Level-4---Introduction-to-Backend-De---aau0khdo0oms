const fs = require('fs').promises;
const updateFile = require('./index');

const updateFile = async (fileName, fileContent) => {
    try {
        await fs.writeFile(fileName, fileContent);
        console.log(`File "${fileName}" has been updated.`);
    } catch (error) {
        console.error(`Error updating file "${fileName}":`, error);
    }
};
const fileName = 'myfile.txt';
const newContent = 'Newton School, is an online learning platform.';

updateFile(fileName, newContent);


module.exports = updateFile;


