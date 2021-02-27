import { combineReducers } from 'redux'
import general from './general'
import habits from './habits'


const rootReducer = combineReducers({
    general,
    habits
})

export default rootReducer;