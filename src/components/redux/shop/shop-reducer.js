import { SHOP_DATA } from './shop-data';

const defaultState = {
    collections: SHOP_DATA
};

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};
