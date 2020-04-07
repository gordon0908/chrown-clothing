// import { SHOP_DATA } from './shop-data';
import { ADD_SHOP } from './type';

const defaultState = {
    collections: []
};

export default (state = defaultState, action) => {
    switch(action.type) {
        case ADD_SHOP:
            return {
                ...state,
                collections: action.payload
            }

        default:
            return state;
    }
};
