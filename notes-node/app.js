console.log('Starting app.js')

const fs = require('fs')
const os = require('os')
const notes = require('./notes.js')

console.log('Results:', notes.add(2, 5))
// var user = os.userInfo()

// fs.appendFileSync(
// 	'greetings.txt',
// 	`Hello ${user.username}! You are ${notes.age}.`
// )
// var res = notes.addNote()
// console.log(res)
