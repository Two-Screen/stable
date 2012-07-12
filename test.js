var test = require('tap').test;
var stable = require('./');


function gt(a, b) {
    return a > b;
}

function cmp(a, b) {
    if (a === b) return 0;
    if (a > b) return 1;
    return -1;
}

function keyCmp(a, b) {
    return cmp(a.key, b.key);
}


test(function(t) {
    t.same(
        stable([9, 2, 10, 5, 4, 3, 0, 1, 8, 6, 7]),
        [0, 1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
    );

    t.same(
        stable([9, 2, 10, 5, 4, 3, 0, 1, 8, 6, 7], gt),
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    );

    t.same(
        stable([9, 2, 10, 5, 4, 3, 0, 1, 8, 6, 7], cmp),
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    );

    t.same(
        stable(["foo", "bar", "baz"]),
        ["bar", "baz", "foo"]
    );

    t.same(
        stable([{ key: 4 }, { key: 3 }, { key: 5 }], keyCmp),
        [{ key: 3 }, { key: 4 }, { key: 5 }]
    );

    t.end();
});
