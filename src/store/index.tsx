import { createStore, applyMiddleware, compose} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // blacklist: ['habits']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer)
export const persistor = persistStore(store)