import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from 'redux-thunk';
import axios from 'axios';
import { API_URL } from '../../config'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducers, applyMiddleware(thunk.withExtraArgument(api)))

const api = axios.create({
  responseType: 'json',
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  }
});

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
