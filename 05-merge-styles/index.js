const fs = require('fs');
const path = require('path');
const styles = path.join(__dirname, 'styles');

(function newFolder() {
    const newStyles = path.join(__dirname, path.sep, 'project-dist/bundle.css');
    fs.open(newStyles, 'w+', (err) => {
        if (err) {
            return err;
        }
    });
})();

fs.readdir(styles, function(err, items) {
    if (err) {
        return err;
    }
    let result = '';
    for (let i = 0; i < items.length; i++) {
        if (path.extname(items[i]) == '.css') {
            let stream = fs.createReadStream(path.join(__dirname, path.sep, 'styles', path.sep, items[i]));
            stream.on('data', (file) => {
                result += file;
            });
            stream.on('end', () => {
                let bundleStyles = path.join(__dirname, path.sep, 'project-dist/bundle.css');
                fs.appendFile(bundleStyles, result, function(err) {
                    if (err) {
                        return err;
                    } 
                });
            })
        }        
    }
});