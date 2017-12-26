/* var obj = {
    name : "Sachin",
    Age : 25
}
var persondetail = JSON.stringify(obj);
console.log(typeof persondetail);
console.log(persondetail);

//reverse of this

var stringObj = '{"name" : "Sachin", "Age" : 25}';
var detail = JSON.parse(stringObj);
console.log(typeof detail);
console.log(detail); */

const fs = require('fs');
var originalNote = {
    title : 'Young as morning Old as Sea',
    body : 'Album By Passenger'
}
stringNote = JSON.stringify(originalNote);
fs.writeFileSync('notes2.json',stringNote);

var readFile = fs.readFileSync('notes2.json');
backOriginal = JSON.parse(readFile);
console.log(typeof backOriginal);
console.log(backOriginal.title);
console.log(backOriginal.body);
