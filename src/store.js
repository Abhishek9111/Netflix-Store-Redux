import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk'


//components
import rootReducer from './reducer/index'

const middleware = [thunk]
import {composeWithDevTools} from 'redux-devtools-extension'


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))     //can be done without composewithdevtools too
)

export default store