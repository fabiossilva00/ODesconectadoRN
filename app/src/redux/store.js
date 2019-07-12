import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import combine from './combineReducers'

export default createStore(combine, applyMiddleware(thunk))