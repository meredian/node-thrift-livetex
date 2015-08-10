import path from 'path';
import fs from 'fs';

function requireDir(baseDir, requireRoot) {
    var requireDir = path.resolve(path.join(baseDir, requireRoot))
    console.log(requireDir);
    return fs.readdirSync(requireDir).reduce(function(result, fileName) {
        var file = path.join(requireDir, fileName);
        var ext = path.extname(fileName);

        if (!fs.statSync(file).isDirectory() && ext === ".js") {
            result[path.basename(file, ext)] = require(file);
        }
        return result;
    }, {});
};

export {requireDir}
