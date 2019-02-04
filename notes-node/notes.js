console.log('Starting notes.js')

const fs = require('fs')

var addNote = (title, body) => {
    var notes = []
    var note = {
        title,
        body
    }
    try{
        var noteString = fs.readFileSync('notes-data.json')
        notes = JSON.parse(noteString)
    }catch (e){

    }
    var duplicateNotes = notes.filter((note) =>{
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push(note)
        fs.writeFileSync('notes-data.json', JSON.stringify(notes))
        return note
    }
}

var getAll = () => {
    console.log('Getting all notes')
}

var readNote = (title) => {
    console.log('Reading:', title)
}

var removeNote = (title) => {
    console.log('Removing:', title)
}
 module.exports = {
    addNote,
    //addNote: addNote
    //This is identical
    getAll,
    readNote,
    removeNote
 }

