/**
 * Imports
 */

import test from 'tape'
import yoco, {map} from '../src'
import rlog from 'redux-log'

/**
 * Tests
 */

test('should work', (t) => {
  let l = []
  let log = yoco(rlog(l))
  log(function * () {
    yield 'hello'
    yield 'world'
  })
  t.deepEqual(l, ['hello', 'world'])
  t.end()
})

test('should wrap', (t) => {
  let l = []
  let log = yoco(rlog(l))
  let hello = log.wrap(function * () {
    yield 'hello'
    yield 'world'
  })
  t.deepEqual(l, [])
  hello()
  t.deepEqual(l, ['hello', 'world'])
  t.end()
})

test('should work as array', (t) => {
  let l = []
  let log = yoco([rlog(l)])
  log(function * () {
    yield 'hello'
    yield 'world'
  })
  t.deepEqual(l, ['hello', 'world'])
  t.end()
})

test('should create mapping generator', (t) => {

  let wacky = map(wackify)

  wacky(function * () {
    let wackyHappy = yield 'happy'
    let wackyParallel = yield ['dog', 'cat']
    t.equal(wackyHappy, 'wacky happy')
    t.deepEqual(wackyParallel, ['wacky dog', 'wacky cat'])
    t.end()
  })

  function wackify (str) {
    return 'wacky ' + str
  }

})
