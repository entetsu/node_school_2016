var mymodule = require('./mymodule.js');
var dir = process.argv[2];
var ext = process.argv[3];
mymodule(dir, ext, function(err, list){
  list.map(function(l){
    console.log(l);
  });
});
