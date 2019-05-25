import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './ducks'
import thunkMiddleware from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
