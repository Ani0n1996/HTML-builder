const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

async function makeStyles() {
    let pathStyles = path.join(__dirname, 'styles');
    let styles = await fsPromises.readdir(pathStyles);
    let string = '';

    for (let i = 0; i < styles.length; i++) {
        let name = path.extname(styles[i]);
        if (name == '.css') {
            let file = await fsPromises.readFile(path.join(pathStyles, styles[i]));
            string = string + file;
        }
    }
    
    fs.writeFile(path.join(__dirname, 'project-dist', 'bundle.css'), string, (err) => {
        if (err) {
            return err;
        }
    });
};

makeStyles();