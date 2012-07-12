## Stable

A stable array sort, because `Array#sort()` is not guaranteed stable.

MIT licensed.

### From the browser

Include `stable.js` in your page, then call `stable()`.

### From Node.js

Install using NPM:

    npm install stable

Require in your code:

    var stable = require("stable");

#### Usage

The default sort is, as with `Array#sort`, lexicographical:

    stable(["foo", "bar"]);   // => ["bar", "foo"]
    stable([10, 1, 5]);       // => [1, 10, 5]

A comparator function can be specified:

    function cmp(a, b) { return a > b }
    var res = stable([10, 1, 5], cmp);  // -> [1, 5, 10]

Unlike `Array#sort`, sorting is **NOT** performed in-place.
