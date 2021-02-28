import { combineReducers } from 'redux'
import general from './general'
import habits from './habits'
import tracks from './tracks'



const rootReducer = combineReducers({
    general,
    habits,
    tracks
})

export default rootReducer;