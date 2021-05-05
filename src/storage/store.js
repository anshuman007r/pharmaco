import { AsyncStorage } from 'AsyncStorage';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import countReducer from './countReducer'

const rootReducer = combineReducers({
    countReducer : countReducer
})

const persistConfig = {
    // Root
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        'countReducer',
    ],
    timeout: null,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
    persistedReducer,
    applyMiddleware(
        createLogger(),
    ),
);

const persistor = persistStore(store);

export { store, persistor };