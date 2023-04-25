import frequencyService from "../../services/frequencyServices";

export const actionTypes = {
	CREATE_FREQUENCY: 'CREATE_FREQUENCY',
	GET_DATA_FREQUENCY: 'GET_DATA_FREQUENCY',
	MAKE_FREQUENCY: 'MAKE_FREQUENCY',
	SAVE_ROUTE_FREQUENCY: 'SAVE_ROUTE_FREQUENCY'
}

export const createFrequency = (data) => async (dispatch) => {
	return frequencyService.createFrequencyService(data).then(
		(response) => {
			if (response) {
				if (response.success) {
					dispatch({
						type: actionTypes.CREATE_FREQUENCY,
						payload: response,
					});
				}
				Promise.resolve();
				return response;
			}
		},
		() => {
			Promise.reject()
		}
	).catch(e => {
		const status = e.response && e.response.status

		if (status === 401) {
			dispatch(logout())
		}

		return e
	});
};

export const getDataFrequency = ({ id }) => (dispatch) => {
	return frequencyService.getDataFrequencyService(id).then(
		(response) => {
			if (response) {
				dispatch({
					type: actionTypes.GET_DATA_FREQUENCY,
					payload: response,
				});
				Promise.resolve();
				return response;
			}
		},
		(error) => {
			Promise.reject();
			return error;
		}
	);
};

export const makeFrequency = (data) => (dispatch) => {
	return frequencyService.postMakeFrequencyService(data).then(
		(response) => {
			if (response) {
				dispatch({
					type: actionTypes.MAKE_FREQUENCY,
					payload: response,
				});
				Promise.resolve();
				return response;
			}
		},
		(error) => {
			Promise.reject();
			return error;
		}
	);
};

export const saveRoute = (data) => (dispatch) => {
	dispatch({
		type: actionTypes.SAVE_ROUTE_FREQUENCY,
		payload: data,
	});
};