const fs = require('fs');
const path = require('path');
const connectPath = path.join(__dirname, path.sep, 'text.txt');
const input = process.stdin;
const output = process.stdout;
const readline = require('readline');
const rl = readline.createInterface({ input, output });

fs.open(connectPath, 'w+', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('Hello! Please, enter text!\n(Type "exit" or press Ctrl + C to quit)\n');
}); 

rl.on('line', function (chunk) {
    if (chunk == 'exit') {
        rl.pause();
        console.log('Exit. Goodbye!');
    } else {
        fs.appendFile(connectPath, chunk + '\n', function(error) {
            if(error) {
                return error;
            }
        });
    }
});

rl.on('SIGINT', () => {
    rl.pause();
    console.log('Exit. Goodbye!');
});