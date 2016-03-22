/**
 * Imports
 */

import flow from 'redux-flo'
import bind from '@f/bind-middleware'

/**
 * yoco
 * @param  {mw} redux style middleware
 * @return {fn} dispatch function to middleware
 */

function yoco (mw, errorHandler) {
  return bind([flow(errorHandler), ...mw])
}

/**
 * Exports
 */

export default yoco
