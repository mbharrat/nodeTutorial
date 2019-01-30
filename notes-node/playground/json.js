// var obj = {
// 	name: 'Michael'
// }

// var stringObj = JSON.stringify(obj)
// console.log(typeof stringObj)
// console.log(stringObj)

// var personString = '{"name": "Michael", "age":25}'
// var person = JSON.parse(personString)
// console.log(typeof person)
// console.log(person)

const fs = require('fs')

var originalNote = {
	title: 'Some title',
	body: 'Some body'
}
// originalNoteString
const originalNoteString = JSON.stringify(originalNote)
console.log(typeof originalNoteString)
fs.writeFileSync('notes.json',originalNoteString)

var noteString = fs.readFileSync('notes.json')
 note = JSON.parse(noteString)
console.log(typeof note)
console.log(note.title)