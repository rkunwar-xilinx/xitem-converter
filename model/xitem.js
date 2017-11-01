var SchemaObject = require('node-schema-object');
var XItemInfra = require('./xitem-infra');

var InfraSection = new SchemaObject({
    infra : XItemInfra
});

var Config = new SchemaObject({
    items : [InfraSection]
});

var XItem = new SchemaObject({
    config : Config,
    _major : Number,
    _minor : Number
});

module.exports = {XItem: XItem, Infra: InfraSection};