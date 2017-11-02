const fs = require('fs');
const fsys = require("file-system");
const path = require('path')
const jsonfile = require('jsonfile');

var XItemInfra = require('./model/xitem-infra');
var XItem = require('./model/xitem')

console.log('Starting the xitem-conv.js script');

fsys.recurse('./', ['**/*.json'], function(filepath, relative, filename) {
    if(filename == 'description.json') {
        console.log('Found the file !');
        fs.readFile(filepath, 'utf8', function(err, data) {
            if(err) throw err;
            var desc = JSON.parse(data);
            console.log(desc.example);

            var xitem = new XItem.XItem();
            var infraSection = new XItem.Infra();
            var infra = new XItemInfra();

            if(desc.example != undefined)
                infra.name = desc.example;
            
            if(desc.overview != undefined)
                infra.description = desc.overview;

            if(desc.contributors != undefined)                
                infra.contributors = desc.contributors;

            if(desc.revision != undefined) {
                if(desc.revision.length > 0) {
                    if(desc.revision[0].version != undefined) {
                        infra.revision = desc.revision[0].version;
                    }
                }
            }

            infraSection.infra = infra;
            xitem.config.items.push(infraSection);

            console.log(xitem);
            jsonfile.writeFile(path.dirname(filepath) + "/xitem.json", xitem, {spaces: 2, EOL: '\r\n'}, err => {
                console.log(err);
            });
        });
    }
});