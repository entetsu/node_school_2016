function mymodule(dir, ext, callback){
  var fs = require('fs');

  fs.readdir(dir, function(err, list){
    if (err)
      return callback(err);
    list = list.filter(function(l){
      return l.match(ext);
    });
    callback(null, list);
  });
};

module.exports = mymodule;
