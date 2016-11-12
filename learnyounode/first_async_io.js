var fs = require('fs');
var contents = fs.readFile('./program.js', 'utf8', function(err, data){
  console.log(err);
  console.log(data);
});

