# Summary

---

_To do_

# Notes

---

Use require to import modules

```js
const fs = require("fs");
```

If you import your own modules you need to use the relative path in the require

```js
const notes = require("./notes.js");
```

To define your own modules write as follows:

```js
module.exports.add = (a, b) => {
    return a + b;
};
```

Then after importing you can consume this function as follows:

```js
notes.add(5, 2);
```

## 3rd Party Modules

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

### Nodemon

This third party module allows for node to refresh whenever you save

```sh
npm install nodemon -g
```

The `-g` flag means it's saved globally as a cli interface! Not a dependancy in your project.

# Getting Input from User

There are multiple ways to do this

You can use process.argv.

If you do this by `console.log(process.argv)` you will get all the CLI arguments you input into CLI.

For example, if you enter

```sh
$node app.js remove
```

and run `console.log(process.argv[2])`, this will ask for the third argument and it will log **remove**.

Turns out this is an annoying way to do this... the better idea is to use a third party module called **Yargs**.

### YARGS

`$npm install yargs@4.7.1 --save`

This is exactly how it always has been except after the @ you can specify the version number.

Once installed these are the basic steps.

```js
const yargs = require("yargs");
const argv = yargs.argv;
```

We are using the argv object on yargs.

You can pass in specific arguments like this:
`$node app.js add --title='Scene' --body='testBody'`

To access 'add' you can use `yargs.argv._[0]`, to access title you do `yargs.argv.title` to access body you do `yargs.argv.body`

In this project we use the .command() functionality found in documentation. You can view the documentation [here](http://yargs.js.org/).

### JSON

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
};
```

To convert a json object to a string you run the stringify method: `var personString = JSON.stringify(jsonObject)`

To convert a json string (stored in some file.json) into a JS object again you run the parse method: `var person = JSON.parse(personString)`

### FS

To read a file: `fs.readFileSync('<nameOfFile>')`
To write a file: `fs.writeFileSync('<nameOfFile>',contents)`

## Syntax

In ES6 if the key is the same as the name of the attribute instead of:

```json
{
    "title": title,
    "body": body
}
```

You can write like:

```json
{
    title,
    body
}
```

### DEBUGGING

You can debug node application from the CLI:

```sh
$node inspect <pathToFile/Name>
```

This starts the debugger.

When in debug mode:

-   `list(<Number>)` lists that many lines of the whole code in the debugger
-   `n` is short for next, this continues to next line of code (does no execute yet)
-   `c` is short for continue and moves through full execution (or up to where a debugger statement is found in the code)
-   `repl` is short for read eval print loop which allows for a dev to look into code via javascript to see value of objects/manipulate values of object
-   In order to not always traverse using `n` you can put a `debugger` statement in your code:

For example:

```js
var logNote = note => {
    debugger;
    console.log("----------------");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};
```

Now when you put `c` in debugger in cli it will stop at that debug statement

For _Chrome_ debugging enter this into cli:

```sh
$node --inspect-brk <nameOfFile>
```

This works just like cli but to view the debugger go to chrome, and enter url chrome://inspect.

To continue you toggle the continue button, to step over you toggle the step over button. This is just the normal debugger with a GUI

### Arrow Functions

There are some important things to note with arrow functions. They work differently than normal functions.

**They do not bind the `this` keyword.**

```js
var user = {
    name: "Michael",
    sayHi: () => {
        console.log(`Hi. I'm ${this.name}`);
    }
};
```

The `sayHi` function will print `Hi. I'm undefined.` It does not have access to `this` keyword. However if you define the same object with a normal function:

```js
var user = {
    name: "Michael",
    sayHi() {
        console.log(`Hi. I'm ${this.name}`);
    }
};
```

This will work as expected and print `Hi. I'm Michael`

**They do not bind the `arguments array`**

```js
var user = {
    name: "Michael",
    sayHi: () => {
        console.log(arguments);
    }
};
user.sayHi(1, 2, 3);
```

This won't print as expected, it will actually print the arguments of the global object. As a normal function:

```js
var user = {
    name: "Michael",
    sayHi() {
        console.log(arguments);
    }
};
user.sayHi(1, 2, 3);
```

This will print `[Arguments] { '0': 1, '1': 2, '2': 3 }` which is exactly what is expectected.
