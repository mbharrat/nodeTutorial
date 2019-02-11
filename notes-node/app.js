console.log('Starting app.js')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const argv = yargs.argv
const command = argv._[0]
console.log('Process:', process.argv)
console.log('Yargs', argv)

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