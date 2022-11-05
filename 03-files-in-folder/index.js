const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), function(err, items) {
    if (err) {
        return err;
    }
    for (var i = 0; i < items.length; i++) { 
        const item = items[i];
        fs.stat(path.join(__dirname, 'secret-folder', path.sep, items[i]), (err, stats) => {
            if (err) {
                return err;
            }
            if (stats.isFile()) {
                const infoItem = item.split('.');
                const sizeItem = (stats.size / 1000) + 'kb';
                console.log(infoItem[0] + ' - ' + infoItem[1] + ' - ' + sizeItem);
            }
        })
    }
});