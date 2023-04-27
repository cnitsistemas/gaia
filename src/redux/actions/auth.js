import authServices from "../../services/authServices";

export const actionTypes = {
	SET_LOGIN: 'SET_LOGIN',
	SET_ACCESS_USER: 'SET_ACCESS_USER',
	SET_REQUIRED: 'SET_REQUIRED',
	SET_LOGOUT: 'SET_LOGOUT',
	SET_ACCESS_BIOMETRIC: 'SET_ACCESS_BIOMETRIC'
}

export const setRequiredAuth = (required) => async (dispatch) => {
	dispatch({
		type: actionTypes.SET_REQUIRED,
		payload: required
	})
}

export const setLogin = (login) => async (dispatch) => {
	dispatch({
		type: actionTypes.SET_LOGIN,
		payload: login
	})
}

export const login = (user) => (dispatch) => {
	return authServices.logIn(user).then(
		(response) => {
			if (response && response.success) {
				dispatch(setAccessUser(response));
				dispatch({
					type: actionTypes.SET_LOGIN,
					payload: response,
				});
			}
			Promise.resolve();
			return response;
		},
		(error) => {
			Promise.reject();
			return error;
		}
	)
		.catch((e) => { console.warn(e) })
};

export const logout = () => async (dispatch) => {
	return authServices.logOut().then((response) => {
		if (response.status === "success") {
			dispatch(setAccessUser({}));
			dispatch({
				type: actionTypes.SET_LOGOUT,
			});
			Promise.resolve();
			return response;
		}
	},
		(error) => {
			Promise.reject();
			return error;
		});
};

export const setAccessUser = (value) => ({
	type: actionTypes.SET_ACCESS_USER,
	payload: value
})

export const setBiometricAccessUser = (value) => ({
	type: actionTypes.SET_ACCESS_BIOMETRIC,
	payload: value
})
