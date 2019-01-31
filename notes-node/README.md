# Summary

---

_To do_

# Notes

---

Use require to import modules

```js
const fs = require("fs")
```

If you import your own modules you need to use the relative path in the require

```js
const notes = require("./notes.js")
```

To define your own modules write as follows:

```js
module.exports.add = (a, b) => {
    return a + b
}
```

Then after importing you can consume this function as follows:

```js
notes.add(5, 2)
```

#### 3rd Party Modules

First step is to create a package.json file

```sh
npm init
```

Follow the prompted commands

Now it's time to download a 3rd party module (for this example its lodash)

```sh
npm install lodash --save
```

The --save flag allows the package.json file to have the dependancy. Now a node_modules folder is created inside project. This folder should never be shared with the project because a npm install will update/install this pacakge. If you use git have a .gitignore file in the root with these contents

```
.gitignore
node_modules
```

The .gitignore will allow git to actually ignore this file (so your .gitignore file won't show up in your repo)

**Nodemon**

This third party module allows for node to refresh whenever you save

```sh
npm install nodemon -g
```

The `-g` flag means it's saved globally as a cli interface! Not a dependancy in your project.

#### Getting Input from User

There are multiple ways to do this

You can use process.argv.

If you do this by `console.log(process.argv)` you will get all the CLI arguments you input into CLI.

For example, if you enter

```sh
$node app.js remove
```

and run `console.log(process.argv[2])`, this will ask for the third argument and it will log **remove**.

Turns out this is an annoying way to do this... the better idea is to use a third party module called **Yargs**.

**YARGS**

`$npm install yargs@4.7.1 --save`

This is exactly how it always has been except after the @ you can specify the version number.

Once installed these are the basic steps.

```js
const yargs = require("yargs")
const argv = yargs.argv
```

We are using the argv object on yargs.

You can pass in specific arguments like this:
`$node app.js add --title='Scene' --body='testBody'`

To access 'add' you can use `yargs.argv._[0]`, to access title you do `yargs.argv.title` to access body you do `yargs.argv.body`

**JSON**

Json is a notation to store data in Javascript Object Notation.

A json object looks like so:

```json
{
    "title": "some_Title",
    "body": "some_Body"
}
```

A Json object stored in a js variable looks like this:

```js
let jsonObject = {
    title: "some_Title",
    body: "some_Body"
}
```

To convert a json object to a string you run the stringify method: `var personString = JSON.stringify(jsonObject)`

To convert a json string (stored in some file.json) into a JS object again you run the parse method: `var person = JSON.parse(personString)`

**FS**

To read a file: `fs.readFileSync('<nameOfFile>')`
To write a file: `fs.writeFileSync('<nameOfFile>',contents)`
