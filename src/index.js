/**
 * Imports
 */

import flow from 'redux-flo'
import bind from '@f/bind-middleware'

/**
 * flo-bind
 * @param  {fn} ...args redux style middleware
 * @return {fn} dispatch function to middleware
 */

function flob (...args) {
  return bind([flow(), ...args])
}

/**
 * Exports
 */

export default flob
