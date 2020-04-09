import { firestore, convertCollectionsSnapshotToMap } from '../../../firebase/firebase.util';
import { takeEvery, call, put, all } from 'redux-saga/effects';

import { fetchShopSuccess, fetchShopFailed} from './shop-action';
import { FETCH_SHOP_START, FETCH_SHOP_SUCCESS, FETCH_SHOP_FAILED } from './type';

function* sagasStartToProgress() {
    // yield console.log('sagasStartToProgress')

    const collectionRef = firestore.collection('collections');
    try {

        const collectionData = yield collectionRef.get();

        const collections = yield call(convertCollectionsSnapshotToMap, collectionData);

        yield put(fetchShopSuccess(collections));
    }catch(e) {
        yield put(fetchShopFailed(e.message));
    }
};

export function* sagasStart() {
    yield takeEvery(FETCH_SHOP_START, sagasStartToProgress);
}

export function* shopSaga() {
    yield all([call(sagasStart)])
}