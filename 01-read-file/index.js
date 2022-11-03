const fs = require('fs');
const path = require('path');
const connectPath = path.join(__dirname, path.sep, 'text.txt');
const readStream = fs.createReadStream(connectPath);
let data = '';

readStream.on('data', (chunk) => {
    data += chunk;
});

readStream.on('end', () => {
    console.log(data);
});

readStream.on('error', (error) => {
    console.log('Error', error.message);
});