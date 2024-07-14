var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user.username);

fs.appendFile('greeting.txt', 'Hi ' + user.username + '!\n', ()=>{
  console.log('File was written successfully');
});