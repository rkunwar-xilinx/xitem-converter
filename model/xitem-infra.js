var SchemaObject = require('node-schema-object');
var Contributor = require('./contributor');

var XItemInfra = new SchemaObject({
    name : String,
    display : String,
    revision : Number,
    description : [String],
    company : String,
    company_display : String,
    author : String,
    contributors : [Contributor],
    category : String,
    logo : String,
    website : String,
    "search-keywords" : [String] 
}, {
    constructors : {
        default: function(values) {

            if(this.company == undefined) {
                this.company = "xilinx.com";
            }

            if(this.company_display == undefined) {
                this.company_display = "Xilinx, Inc.";
            }

            if(this.author == undefined) {
                this.author = "Xilinx";
            }
        }
    }
})

module.exports = XItemInfra;