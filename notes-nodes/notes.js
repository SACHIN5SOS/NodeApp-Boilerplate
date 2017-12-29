

console.log('Starting notes.js');
const fs = require('fs');
var fetchNotes= () => {
    try {
        var noteString= fs.readFileSync('notes-data.json');   //for storing previous values of notes-data.json
        return JSON.parse(noteString);
    } catch (error) {
        return [];
    }
}
var saveNotes= (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}
var addNote=(title,body) =>
{
    
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    

    //if title already doesnot exist then insert otherwise skip it
    var duplicateFiles= notes.filter((note)=> note.title===title);  //return note.title === title;
    if(duplicateFiles.length===0)
    {
        notes.push(note);
        saveNotes(notes);
        return note;
    }

};
var getAll = () => {
    console.log('Getting All lists');
}
var getNote = (title) => {
    console.log('Reading ',title);
}
var removeNote = (title) =>
{
    var notes= fetchNotes();
    var filterdNotes= notes.filter((note)=> note.title !== title);
    saveNotes(filterdNotes);
    return notes.length !== filterdNotes.length;
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