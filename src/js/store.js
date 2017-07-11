import { applyMiddleware, createStore, compose } from 'redux'
import { createLogger } from 'redux-logger'

import reducer from './rootReducer'

const logger = createLogger()
const middleware = applyMiddleware(logger)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  reducer, 
  composeEnhancers(middleware)
)
