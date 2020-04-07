import { ADD_SHOP } from './type';

export const addShop = data => {
    // console.log('cccc')
    return ({
        type: ADD_SHOP,
        payload: data
    });
}