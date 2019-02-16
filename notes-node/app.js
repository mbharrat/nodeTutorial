const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const titleObj = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}
const bodyObj = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

const argv = yargs
.command('add','Add a new note', 
{
    title: titleObj,
    body: bodyObj
}).command('list', 'List all notes')
.command('read', 'Read a note',
{
    title: titleObj
}).command('remove', 'Remove a note', {
    title: titleObj
})
.help()
.argv
const command = argv._[0]

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body)
    if(note){
        console.log('Creating note.')
        notes.logNote(note)

    }else{
        console.log('Duplicate note.')
    }
}else if(command === 'list'){
    notes.getAll()
}else if(command === 'read'){
    var foundNote =  notes.readNote(argv.title)
    console.log('Searching for note...')
    var message = foundNote !== undefined ? `${notes.logNote(foundNote)}`  : console.log('No note found.')
    

}else if(command === 'remove'){
    var didRemove = notes.removeNote(argv.title)
    var message = didRemove ? 'Note was removed.' : 'No note was removed.'
    console.log(message)
}else{
    console.log('Command not recognized')
}