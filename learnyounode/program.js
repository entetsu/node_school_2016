var http = require('http');

var options = {
  hostname: process.argv[2]
}

http.get(process.argv[2], function(res){
  var all_data = '';
  res.setEncoding('utf8');
  res.on('data', function(chunk){
    console.log(chunk);
  });
});
