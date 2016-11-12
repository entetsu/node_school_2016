var fs = require('fs');
var contents = fs.readdir('./', function(err, list){
  list.map(function(l){
    console.log(l);
  });
});
