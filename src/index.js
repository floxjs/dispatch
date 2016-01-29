/**
 * Imports
 */

import flow from 'redux-flo'
import bind from '@f/bind-middleware'
import isArray from '@f/is-array'

/**
 * flo-bind
 * @param  {fn} ...args redux style middleware
 * @return {fn} dispatch function to middleware
 */

function flob (...mw) {
  if (isArray(mw[0])) mw = mw[0]
  return bind([flow(), ...mw])
}

/**
 * Exports
 */

export default flob
