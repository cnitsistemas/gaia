import routesServices from "../../services/routesServices";

export const actionTypes = {
	SET_ROUTES: 'SET_ROUTES',
}

export const getRoutes = () => (dispatch) => {
	return routesServices.getRoutesService().then(
		(response) => {
			if (response) {
				dispatch({
					type: actionTypes.SET_ROUTES,
					payload: response,
				});
				Promise.resolve();
				return response;
			}
		},
		(error) => {
			const message = error.toString();
			Promise.reject();
			return message;
		}
	);
};