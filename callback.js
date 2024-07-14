function callback(){
  console.log("Callback function called");
}

const add = function (a,b,callback){
  var result = a+b;
  console.log('result: '+result);
  callback();
}
add(2,3,callback);

