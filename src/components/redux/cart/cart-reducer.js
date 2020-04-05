import { TOGGLE_CART, ADD_ITEM, REMOVE_ITEM, REDUCE_ITEM } from './type';

const defaultState = {
    hidden: true,
    items: []
};

const addNewItem = (items, item) => {
    const existingItem = items.find(it => it.id === item.id);
    if (existingItem) {
        return items.map(it => {
            return it.id === item.id? {...it, quantity: it.quantity + 1} : it;
        })
    }
    return [...items, {...item, quantity: 1}];
}

const reduceExistItem = (items, item) => {
    const existingItem = items.find(it => it.id === item.id);

    if (existingItem.quantity < 2) {
        return items.filter(it => it.id !== existingItem.id);
    }

    return items.map(it => it.id === item.id?  {...it, quantity: it.quantity - 1}: it);
};

export default (state = defaultState, action) => {
    switch(action.type) {
        case TOGGLE_CART:
            return {
                ...state,
                hidden: !state.hidden
            };

        case ADD_ITEM:
            return {
                ...state,
                items: addNewItem(state.items, action.payload)
            };

        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(it => it.id !== action.payload.id)
            };

        case REDUCE_ITEM:
            return {
                ...state,
                items: reduceExistItem(state.items, action.payload)
            }

        default:
            return state;
    }
};
