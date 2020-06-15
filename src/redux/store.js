import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware'
import authReducer from './authReducer';
import albumReducer from './albumReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    data: albumReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));