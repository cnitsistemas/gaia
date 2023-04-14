import frequencyService from "../../services/frequencyServices";

export const actionTypes = {
	CREATE_FREQUENCY: 'CREATE_FREQUENCY',
}

export const createFrequency = () => (dispatch) => {
	return frequencyService.createFrequencyService().then(
		(response) => {
			if (response) {
				dispatch({
					type: actionTypes.CREATE_FREQUENCY,
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