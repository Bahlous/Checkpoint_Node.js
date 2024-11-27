const generatePassword = require('generate-password');
 
 
let passwords = generatePassword.generateMultiple(4,{
// let password = generatePassword.generate({
  length: 8,
  numbers: true,
});
 // 'uEyMTw32v9'
console.log(passwords);