import { storeDataStorage } from "../../services/asyncStoregeServices";

export const actionTypes = {
	SET_FIRST_ACCESS: 'SET_FIRST_ACCESS',
	SET_INSTRUCTION_USE: 'SET_INSTRUCTION_USE'
}
let STORAGE_KEY = 'ui';

export const setFirstAccess = (value) => async (dispatch) => {
	await storeDataStorage({ key: STORAGE_KEY, value: { firstAccess: value } });
	return dispatch({
		type: actionTypes.SET_FIRST_ACCESS,
		payload: value,
	});
}

export const setInstructionsUse = (value) => async (dispatch) => {
	await storeDataStorage({ key: STORAGE_KEY, value: { instructionsUse: value } });
	dispatch({
		type: actionTypes.SET_INSTRUCTION_USE,
		payload: value
	})
}

