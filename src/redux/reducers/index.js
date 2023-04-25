import { combineReducers } from "redux";
import auth from './auth';
import ui from './ui';
import routes from './rotas';
import frequency from './frequency';

export default combineReducers({
    auth,
    ui,
    routes,
    frequency
});
