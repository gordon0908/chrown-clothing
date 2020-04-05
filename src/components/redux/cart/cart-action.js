import { TOGGLE_CART, ADD_ITEM, REMOVE_ITEM, REDUCE_ITEM } from './type';

export const toggleCart = () => ({
    type: TOGGLE_CART
});

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: REMOVE_ITEM,
    payload: item
});

export const reduceItem = item => ({
    type: REDUCE_ITEM,
    payload: item
})