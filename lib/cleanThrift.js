"use strict"

// Thrift does not generate var where required in node.js
// source: https://issues.apache.org/jira/browse/THRIFT-1840

var path = require('path');
var fs = require('fs');

// read file list
//var findExports = /^[^var ]([\w_]+)(?!prototype)( = )/gm;

var findExports = /^([\w]+)( = )/gm;
var basePath = path.join(__dirname, 'gen-nodejs');
fs.readdir(basePath, function (err, files) {
    if (!err) {
        files.map(function(value, key, collection) {
            value = path.join(basePath, value);
            fs.readFile(value, { encoding: 'utf8' }, function (err, content) {
                if (content && !err) {
                    var newContent = content.replace(findExports, 'var $1$2');
                    newContent = (/^"use strict"/.test(newContent) ? newContent : "\"use strict\";\n" + newContent);
                    console.log('Fixing file: ', value);
                    fs.writeFile(value, newContent, function (err) {
                        if (err) console.log('Unable to write to file ', value);
                    });
                } else {
                    console.log('No content from file: ', value);
                    if (err) console.log('Error reading file: ', err);
                }
            });
        });
    } else {
        console.log('Error reading dir: ', err);
    }
});
