console.log('Starting notes.js')

const fs = require('fs')

var fetchNotes = () => {
    try{
            var noteString = fs.readFileSync('notes-data.json')
            return  JSON.parse(noteString)
    }catch (e){
        return []
    }
}

var saveNotes = (notesArr) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notesArr))
}
var addNote = (title, body) => {
    var notes = []
    var note = {
        title,
        body
    }
    notes = fetchNotes()
    
    var duplicateNotes = notes.filter((note) =>{
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push(note)
        saveNotes(notes)
        return note
    }
}

var getAll = () => {
    console.log('Getting all notes')
    var getAll = fetchNotes()
    getAll.forEach(logNote)
}

var readNote = (title) => {
    var notes = fetchNotes()
    var getNote = notes.filter((note) => {
        return note.title === title
    })
    return getNote[0]
}

var removeNote = (title) => {
    var notes = fetchNotes()
    var keptNotes = notes.filter((note) => {
        return note.title !== title
    })
    saveNotes(keptNotes)

    return notes.length !== keptNotes.length
}

var logNote = (note) => {

    debugger
    console.log('----------------')
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
}
 module.exports = {
    addNote,
    //addNote: addNote
    //This is identical
    getAll,
    readNote,
    removeNote,
    logNote
 }

