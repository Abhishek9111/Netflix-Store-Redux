import { combineReducers } from 'redux'
import list from './list'

export default combineReducers({        //used to create a single function combining those three functions to be passed to createStore
    list
})