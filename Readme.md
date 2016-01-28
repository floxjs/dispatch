
# flo-bind

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Bind a redux middleware stack that has redux-flo at the top.

## Installation

    $ npm install flo-bind

## Usage

```js
import flob from 'flo-bind'
import rlog from 'redux-log'

let arr = []
let log = flob(rlog(arr))

log(function * () {
  yield 'hello'
  yield 'world'
})

arr // => ['hello', 'world']

```

## API

### flo-bind(...mw)

- `mw` - redux middleware

**Returns:** a function that dispatches actions to the middleware stack

## License

MIT

[travis-image]: https://img.shields.io/travis/joshrtay/flo-bind.svg?style=flat-square
[travis-url]: https://travis-ci.org/joshrtay/flo-bind
[git-image]: https://img.shields.io/github/tag/joshrtay/flo-bind.svg
[git-url]: https://github.com/joshrtay/flo-bind
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/flo-bind.svg?style=flat-square
[npm-url]: https://npmjs.org/package/flo-bind
