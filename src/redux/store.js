import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from 'redux-thunk';
import axios from 'axios';
import { API_URL } from '../../config'

const api = axios.create({
  responseType: 'json',
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  }
});

const store = createStore(
  reducers,
  applyMiddleware(thunk.withExtraArgument(api))
);

export default store;
