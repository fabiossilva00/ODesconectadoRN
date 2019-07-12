import React from 'react'
import { Provider } from 'react-redux'

import Routers from './routers'
import store from './redux/store'

const App = () => {
    return(
        <Provider store={store}>
            <Routers />
        </Provider>
    )
}

export default App