import { mapLoginCreateData } from "../mappers/mapAuth";
import withAuthHeader from "../../utils/withAuthHeader";
import authServices from "../../redux/services/authServices";

export const actionTypes = {
	SET_LOGIN: 'SET_LOGIN',
	SET_ACCESS_USER: 'SET_ACCESS_USER',
	SET_REQUIRED: 'SET_REQUIRED',
	SET_LOGOUT: 'SET_LOGOUT'
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

// export const login = (data) => async (dispatch, getState, api) => {
// 	try {
// 		const url = `api/login`;
// 		const result = await api.post(url, data);
// 		const mappedResult = mapLoginCreateData(result.data.result);

// 		if (mappedResult.success) {
// 			dispatch(setAccessUser(mappedResult));

// 			return mappedResult;
// 		}

// 		return mappedResult;

// 	} catch (e) {
// 		const result = e.response.data;
// 		console.log(e);

// 		dispatch({
// 			type: actionTypes.SET_LOGIN,
// 			payload: {
// 				status: false,
// 				userData: null
// 			}
// 		});

// 		return result;
// 	}
// }
export const login = (user) => (dispatch) => {
	return authServices.logIn(user).then(
		(response) => {
			if (response.success) {
				dispatch(setAccessUser(response));
				dispatch({
					type: actionTypes.SET_LOGIN,
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

export const logout = () => (dispatch) => {
	return authServices.logOut().then((response) => {
		if (response.status === "success") {
			dispatch({
				type: actionTypes.SET_LOGOUT,
			});
			Promise.resolve();
			return response;
		}
	});
};

// export function login(data) {
// 	return function (dispatch, getState, api) {
// 		const url = `api/login`;
// 		return api.post(url, data);
// 	};
// }

// export const logout = () => async (dispatch, getState, api) => {
// 	try {
// 		const url = `api/logout`
// 		const response = await api.post(url, {}, {
// 			...withAuthHeader()
// 		})
// 		let result = {}

// 		if (response?.data && response?.data.success) {
// 			dispatch(setAccessUser(null))

// 		}

// 		return result
// 	} catch (e) {
// 		console.log(e);
// 	}
// }

export const setAccessUser = (value) => ({
	type: actionTypes.SET_ACCESS_USER,
	payload: value
})
