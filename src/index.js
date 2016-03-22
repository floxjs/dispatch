/**
 * Imports
 */

import flow from 'redux-flo'
import bind from '@f/bind-middleware'
import isArray from '@f/is-array'

/**
 * createDispatch
 * @param  {fn} ...args redux style middleware
 * @return {fn} dispatch function to middleware
 */

function createDispatch (mw, errorHandler) {
  return bind([flow(errorHandler), ...mw])
}

/**
 * Exports
 */

export default createDispatch
