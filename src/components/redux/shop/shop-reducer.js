// import { SHOP_DATA } from './shop-data';
import { ADD_SHOP, FETCH_SHOP_START, FETCH_SHOP_SUCCESS, FETCH_SHOP_FAILED } from './type';

const defaultState = {
    collections: [],
    loading: false,
    errorMessage: ''
};

export default (state = defaultState, action) => {
    switch(action.type) {
        case ADD_SHOP:
            return {
                ...state,
                collections: action.payload
            };

        case FETCH_SHOP_START:
            return { ...state, loading: true }

        case FETCH_SHOP_SUCCESS:
            return { ...state, loading: false, errorMessage: '',collections: action.payload }
        case FETCH_SHOP_FAILED:
            return {
                ...state,
                loading: false,
                collections: [],
                errorMessage: action.payload
            }
        default:
            return state;
    }
};
