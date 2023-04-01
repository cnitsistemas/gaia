import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const middleware = [thunk];
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer, applyMiddleware(...middleware))
export const persistor = persistStore(store)
