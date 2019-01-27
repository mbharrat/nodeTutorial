console.log('Starting app.js')

const fs = require('fs')
const _ = require('lodash')

const notes = require('./notes.js')

const command = process.argv[2]
console.log(`Command: ${command}`);