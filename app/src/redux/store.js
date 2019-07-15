import { createStore, applyMiddleware, compose } from 'redux'
import { offline } from '@redux-offline/redux-offline'
import offlineConfig from '@redux-offline/redux-offline/lib/defaults'
import thunk from 'redux-thunk'

import combine from './combineReducers'

const store = createStore(combine, compose(
        applyMiddleware(thunk), offline(offlineConfig)
    )
)

export default store