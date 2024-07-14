const notes  =require('./note.js');
// import notes from "./note.js"

var _ = require('lodash');

console.log('server file is available');

var age = notes.age;

var result = notes.addNumber(age+18, 13);


console.log(age);
console.log('result is now ' +result);

var data = ["person",'sid',1,2,2,3,4,5];
// array se unique data print karna
var filter = _.uniq(data);
console.log(filter);

//..........................................................

// JSON ko object mai convert 
const jsonString = '{"name":"John","age":30, "city":"Pune"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);

// object ko JSON mai conver karna
const objectTOConvert = {
  name :"Siddharth",
  age: 23
};
const json = JSON.stringify(objectTOConvert);
console.log(json);
