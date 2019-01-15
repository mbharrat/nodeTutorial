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
