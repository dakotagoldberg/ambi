import { combineReducers } from 'redux'
import general from './general'
import habits from './habits'
import tracks from './tracks'
import settings from './settings'

const rootReducer = combineReducers({
    general,
    habits,
    tracks,
    settings
})

export default rootReducer;