console.log('Starting app.js')

const fs = require('fs')
const os = require('os')
const notes = require('./notes.js')
const _ = require('lodash')

var filteredArray = _.uniq(['Michael', 1, 2, 'Michael', 'Devina', 1, 1])
console.log(filteredArray)

// console.log(_.isString(true))
// console.log(_.isString('Andrew'))

// console.log('Results:', notes.add(2, 5))
// var user = os.userInfo()

// fs.appendFileSync(
//  'greetings.txt',
//  `Hello ${user.username}! You are ${notes.age}.`
// )
// var res = notes.addNote()
// console.log(res)
