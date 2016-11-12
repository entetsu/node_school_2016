var fs = require('fs');
var contents = fs.readFileSync('./program.js');
console.log(contents.toString().split('\n').length);
