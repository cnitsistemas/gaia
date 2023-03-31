import { actionTypes } from "./../actions/auth";

import AsyncStorage from "@react-native-async-storage/async-storage";
const auth = AsyncStorage.getItem("auth");

const initialState = auth ? auth : {
	auth: null,
	signUp: {},
	requiredAuth: false,
	methodAccess: null,
}

const AuthReducer = (state = initialState, action) => {
	let newState = state;
	switch (action.type) {
		case actionTypes.SET_ACCESS_USER: {
			newState = {
				...state,
				auth: action.payload,
			};

			break;
		}

		default: {
			newState = state;

			break;
		}
	}
	return newState
};

export default AuthReducer;
