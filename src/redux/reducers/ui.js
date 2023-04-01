import { actionTypes } from "./../actions/ui";

const initialState = {
    firstAccess: true,
    instructionsUse: true
}

const AuthReducer = (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case actionTypes.SET_FIRST_ACCESS: {
            newState = {
                ...state,
                firstAccess: action.payload,
            };

            break;
        }
        case actionTypes.SET_INSTRUCTION_USE: {
            newState = {
                ...state,
                instructionsUse: action.payload,
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