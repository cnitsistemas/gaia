import { actionTypes } from "./../actions/auth";

const initialState = {
	auth: null,
	signUp: {},
	requiredAuth: false,
	methodAccess: null,
	biometricAccess: false,
	credentials: null
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

		case actionTypes.SET_ACCESS_BIOMETRIC: {
			newState = {
				...state,
				biometricAccess: action.payload,
			};

			break;
		}
		case actionTypes.SET_CREDENTIALS: {
			newState = {
				...state,
				credentials: action.payload,
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
