
var fs = require('fs');
var path = require('path')
// clean debug folder

var deleteFolderRecursive = function(path) {
    var files = [];
    if( fs.existsSync(path) ) {
        files = fs.readdirSync(path);
        files.forEach(function(file,index){
            var curPath = path + "/" + file;
            if(fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};
var folderName = '../debug'
var folder = path.resolve(__dirname,folderName);

deleteFolderRecursive(folder);
fs.mkdir(folder);
