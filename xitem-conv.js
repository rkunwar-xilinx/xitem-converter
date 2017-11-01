const fs = require("file-system");

console.log('Starting the xitem-conv.js script');

fs.recurse('./', ['**/*.json'], function(filepath, relative, filename) {
    console.log(filepath);
    console.log(filename);
    console.log(relative);
    
    if(filename == 'test.json') {
        console.log('Found the file !');
    }
});