console.log('Starting app.');

// const fs = require('fs');

// const os= require('os');

// const _ = require('lodash');   //requiring module of lodash package

// console.log(_.isString(true));   //lodash module
// console.log(_.isString('Sachin'));
//Lodash AND OS FUNCTIONALITIES
/* 
// const newNote = notes.addNote();
// console.log(newNote);
// var user= os.userInfo();
// //console.log(user);
// fs.appendFile('greeting.txt',`Hello ${user.username}! You are ${notes.age}.`);

const addnumber = notes.add(12,5);
console.log(addnumber);

 */
const notes= require('./notes.js');
/* 
//for taking output with provcess.argv

console.log('Command ', command);
console.log('Processse',process.argv);  //procee.argv 
*/

const yargs = require('yargs');  //It is good for key value pair.. Like   for   node app.js add --tittle "Success"  

const yarg_input = yargs.argv; //for yarg input/* 
var command = yarg_input._[0];    //for taking user input alternative is process.argv[2];

console.log('Yargs": ',yarg_input);    //printg yarg output like Yarrgs = ['_': tittle : 'Sucess']

if(command==='add'){
    notes.addNote(yarg_input.title,yarg_input.body);
}
else if(command==='list')
{
    notes.getAll();
}
else if(command=='read'){
    notes.getNote(yarg_input.title);
}
else if(command=='renove')
{
    notes.removeNote(yarg_input.title);
}
else
console.log('command not recognised');
