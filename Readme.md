
# dispatch

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Create a dispatch function from middleware, with flo at the top.

## Installation

    $ npm install flo-dispatch

## Usage

```js
import dispatcher from '@flox/dispatch'
import rlog from 'redux-log'

let arr = []
let log = dispatcher(rlog(arr))

log(function * () {
  yield 'hello'
  yield 'world'
})

arr // => ['hello', 'world']

```

## API

### createDispatch(mw)

- `mw` - redux middleware

**Returns:** a function that dispatches actions to the middleware stack

## License

MIT

[travis-image]: https://img.shields.io/travis/floxjs/dispatch.svg?style=flat-square
[travis-url]: https://travis-ci.org/floxjs/dispatch
[git-image]: https://img.shields.io/github/tag/floxjs/dispatch.svg?style=flat-square
[git-url]: https://github.com/floxjs/dispatch
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@flox/dispatch.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@flox/dispatch
