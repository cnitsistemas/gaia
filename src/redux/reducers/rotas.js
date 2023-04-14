import { actionTypes } from "../actions/rotas";

const initialState = {
	routes: null,
}

const RoutesReducer = (state = initialState, action) => {
	let newState = state;
	switch (action.type) {
		case actionTypes.SET_ROUTES: {
			newState = {
				...state,
				routes: action.payload,
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

export default RoutesReducer;
