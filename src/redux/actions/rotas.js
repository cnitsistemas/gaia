import routesServices from "../../services/routesServices";
import { logout } from '../actions/auth'
export const actionTypes = {
	SET_ROUTES: 'SET_ROUTES',
}

export const getRoutes = () => async (dispatch) => {
	return routesServices.getRoutesService()
		.then((response) => {
			if (response) {
				dispatch({
					type: actionTypes.SET_ROUTES,
					payload: response,
				});
				Promise.resolve();
				return response;
			}
		})
		.catch(e => {
			const status = e.response && e.response.status

			if (status === 401) {
				dispatch(logout())
			}

			return e
		})
};