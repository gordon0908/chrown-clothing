import { CREATE_CURRENT_USER,
         SAGA_USER_SUCCESS,
         SAGA_USER_FAILED,
         SIGN_OUT_SUCCESS,
         SIGN_OUT_FAILED,
         SIGN_UP_SUCCESS,
         SIGN_UP_FAILED } from './type';

const defaultState = {
    currentUser: null,
    error: null
};

export default (state = defaultState, action) => {
    switch(action.type) {
        case CREATE_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        case SIGN_UP_SUCCESS:
        case SAGA_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case SIGN_UP_FAILED:
        case SIGN_OUT_FAILED:
        case SAGA_USER_FAILED:
            return {
                ...state,
                currentUser: null,
                error: action.payload
            };

        case SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            };

        

        default:
            return state;
    }
};
