console.log('Starting notes.js')

var addNote = (title, body) =>{
    console.log('Adding Note:', title, body)
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

