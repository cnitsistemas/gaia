import { combineReducers } from "redux";
import auth from './auth';
import ui from './ui';
import routes from './rotas';

export default combineReducers({
    auth,
    ui,
    routes
});
