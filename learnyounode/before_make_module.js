var fs = require('fs');

var dir = process.argv[2];
var ext = process.argv[3];

var files = fs.readdir(dir, function(err, list){
  list = list.filter(function(l){
    return l.match(ext);
  });
  list.map(function(l){
    console.log(l);
  });
});

