import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducers from '../reducer'

const createStoreMiddleware = applyMiddleware(thunk)(createStore)
let store = createStoreMiddleware(Reducers)

export {store};