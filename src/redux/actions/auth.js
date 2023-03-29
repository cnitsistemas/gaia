import { mapLoginCreateData } from "../mappers/mapAuth";
import withAuthHeader from "../../utils/withAuthHeader";

export const actionTypes = {
	SET_LOGIN: 'SET_LOGIN',
	SET_ACCESS_USER: 'SET_ACCESS_USER',
	SET_REQUIRED: 'SET_REQUIRED',
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

export const login = (data) => async (dispatch, getState, api) => {
	try {
		const url = `api/login`;
		const result = await api.post(url, data);
		const mappedResult = mapLoginCreateData(result.data.result);

		if (mappedResult.success) {
			dispatch(setAccessUser(mappedResult));

			return mappedResult;
		}

		return mappedResult;

	} catch (e) {
		const result = e.response.data;
		console.log(e);

		dispatch({
			type: actionTypes.SET_LOGIN,
			payload: {
				status: false,
				userData: null
			}
		});

		return result;
	}
}

export const logout = () => async (dispatch, getState, api) => {
	try {
		const url = `api/logout`
		const response = await api.post(url, {}, {
			...withAuthHeader()
		})
		let result = {}

		if (response?.data && response?.data.success) {
			dispatch(setAccessUser(null))

		}

		return result
	} catch (e) {
		console.log(e);
	}
}

export const setAccessUser = (value) => ({
	type: actionTypes.SET_ACCESS_USER,
	payload: value
})
