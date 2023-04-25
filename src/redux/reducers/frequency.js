import { actionTypes } from "../actions/frequency";

const initialState = {
	frequency: null,
	studants: null,
	selectedRoute: null,
}

const RoutesReducer = (state = initialState, action) => {
	let newState = state;
	switch (action.type) {
		case actionTypes.CREATE_FREQUENCY: {
			newState = {
				...state,
				frequency: action.payload,
			};

			break;
		}
		case actionTypes.SAVE_ROUTE_FREQUENCY: {
			newState = {
				...state,
				selectedRoute: action.payload,
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
