var fs = require('fs')
var paths = require('path');

var directory = process.argv[2];
var exit = '.' + process.argv[3];

fs.readdir(directory, function (err, files) {
    if (err) {
        return console.log(err);
    }

    files.forEach(function(file) {
        if (paths.extname(file) === exit) {
            console.log(file);
        };
    });
});