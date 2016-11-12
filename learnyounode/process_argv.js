var return_num = function(){
  var num = 0;
  for(var i=2; i < process.argv.length; i++){
    num += +process.argv[i];
    //console.log(process.argv[i].number());
  }
  return num;
};
console.log(return_num());

//console.log(process.argv.length)
