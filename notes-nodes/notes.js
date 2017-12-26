

console.log('Starting notes.js');
var addNote=(title,body) =>
{
    console.log(title,body);
}
var getAll = () => {
    console.log('Getting All lists');
}
var getNote = (title) => {
    console.log('Reading ',title);
}
var removeNote = (title) =>
{
    console.log('Removing ', title);
}
module.exports = {
    addNote,   //It means addNote:addNote
    getAll,
    getNote,
    removeNote
}





// // module.exports.age=19;

// // module.exports.addNote = () => {
// //     console.log('add notes');
// //     return ('New Nodes added');
// // }
// var a,b;
// module.exports.add = (a,b) =>
// {
//     console.log('Add a and b');
//     return (a+b);
// }