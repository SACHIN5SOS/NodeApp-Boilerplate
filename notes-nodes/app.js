console.log('Starting app.');

const fs = require('fs');

const os= require('os');
const notes= require('./notes.js');
const _ = require('lodash');   //requiring module of lodash package

console.log(_.isString(true));   //lodash module
console.log(_.isString('Sachin'));

// const newNote = notes.addNote();
// console.log(newNote);
// var user= os.userInfo();
// //console.log(user);
// fs.appendFile('greeting.txt',`Hello ${user.username}! You are ${notes.age}.`);

const addnumber = notes.add(12,5);
console.log(addnumber);