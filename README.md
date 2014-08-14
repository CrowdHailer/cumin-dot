cumin-dot
=========

Returns a value from an object, functionally curried to be used in callbacks and with function composition

Installation
============

Available on npm with dot function exposed as export.

```
npm install cumin-dot
```

Use
===

Works with objects, arrays and strings

```
var dot = require('cumin-dot');

var a = [1, 2, 3];
var b = 'hello';
var c = {x: 1, 2: 4};

var takeTwo = dot(2);

takeTwo(a);
// 3

takeTwo(b);
// 'l'

takeTwo(c);
// 4
```

Issues
======

This has been left in version 0.9.0 because of two questions that I want to answer when using this function

1. Is there call for an uncurried version `dot(1, 'hello')`. This might not be necessary as when both are available together you can always use `'hello'[1]`

2. Should it handle nonexistant values in a special way e.g. `dot(0, undefined)` to return undefined rather than error. Useful for chained calls in to objects.