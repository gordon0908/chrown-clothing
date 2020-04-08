import { firestore, convertCollectionsSnapshotToMap } from '../../../firebase/firebase.util';

import { ADD_SHOP, FETCH_SHOP_START, FETCH_SHOP_SUCCESS, FETCH_SHOP_FAILED } from './type';

export const addShop = data => {
    // console.log('cccc')
    return ({
        type: ADD_SHOP,
        payload: data
    });
};

export const fetchShopStart = () => ({
    type: FETCH_SHOP_START
});

export const fetchShopSuccess = data => ({
    type: FETCH_SHOP_SUCCESS,
    payload: data
});

export const fetchShopFailed = message => ({
    type: FETCH_SHOP_FAILED,
    payload: message
});

export const fetchShop = () => dispatch => {
    dispatch(fetchShopStart());
    const collectionRef = firestore.collection('collections');
    collectionRef.get().then(
        snopshot => {
            const data = convertCollectionsSnapshotToMap(snopshot);
            dispatch(fetchShopSuccess(data));
        }
    ).catch(e=>{
        dispatch(fetchShopFailed(e.message))
    })
};