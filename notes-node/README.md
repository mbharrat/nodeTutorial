# Summary

---

_To do_

# Notes

---

Use require to import modules

```js
const fs = require('fs')
```

If you import your own modules you need to use the relative path in the require

```js
const notes = require('./notes.js')
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