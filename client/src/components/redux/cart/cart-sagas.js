import { takeLatest, all, put, call } from 'redux-saga/effects';

import { SIGN_OUT_SUCCESS } from '../user/type';
import { clearItem } from './cart-action';

function* startClearItem() {
    yield put(clearItem());
}

export function* sagaClearItem() {
    yield takeLatest(SIGN_OUT_SUCCESS, startClearItem)
}

export const cartSaga = () => {
    return all([call(sagaClearItem)])
}