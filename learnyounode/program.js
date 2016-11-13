var http = require('http');

var all_data = '';
http.get(process.argv[2], function(res){
  res.setEncoding('utf8');
  res.on('data', function(chunk){
    all_data = all_data + chunk;
  });
  res.on('end', function(){
    console.log(all_data.length);
    console.log(all_data);
  });
});
