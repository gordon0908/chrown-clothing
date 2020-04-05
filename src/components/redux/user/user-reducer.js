import { CREATE_CURRENT_USER } from './type';

const defaultState = {
    currentUser: null
};

export default (state = defaultState, action) => {
    switch(action.type) {
        case CREATE_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };

        default:
            return state;
    }
};
