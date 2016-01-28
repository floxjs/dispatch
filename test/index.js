/**
 * Imports
 */

import test from 'tape'
import flob from '../src'
import rlog from 'redux-log'

/**
 * Tests
 */

test('should work', (t) => {
  let l = []
  let log = flob(rlog(l))
  log(function * () {
    yield 'hello'
    yield 'world'
  })
  t.deepEqual(l, ['hello', 'world'])
  t.end()
})
