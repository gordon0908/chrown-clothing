import { takeLatest, call, put, all } from 'redux-saga/effects';

import { auth, googleProvider, convertCollectionsSnapshotToMap, createUser, getCurrentUser } from '../../../firebase/firebase.util';
import { SAGA_EMAIL_USER_START, SAGA_GOOGLE_USER_START, CHECK_USER_SESSION, SIGN_OUT_START, SIGN_UP_START } from './type';
import { sagaUserSUCCESS, sagaUserFailed, sagaSignOutSuccess, sagaSignOutFailed } from './user-action';

function* getSnapshotFromUserAuth(userAuth, additionData) {
    try{
        const data = yield call(createUser, userAuth, additionData);
        const userSnapshot = yield data.get();
        yield put(sagaUserSUCCESS({id: userSnapshot.id, ...userSnapshot.data()}));
    }catch(e) {
        yield put(sagaUserFailed(e.message));
    }
}

/* Google login */
function* startGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (e) {
        yield put(sagaUserFailed(e.message));
    }
}

export function* sagaGoogleUserStart() {
 
    yield takeLatest(SAGA_GOOGLE_USER_START, startGoogle);
}

/* Email login */
function* startEmail({ payload: { email, password }}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    }catch(e) {
        yield put(sagaUserFailed(e.message));
    }
}

export function* sagaEmailUserStart() {
    yield takeLatest(SAGA_EMAIL_USER_START, startEmail);
}

/* check user */

function* startCheckUserSession() {
    try {
        const userAuth = yield getCurrentUser();

        if (!userAuth) return;

        yield getSnapshotFromUserAuth(userAuth);
    }catch(e) {
        yield put(sagaUserFailed(e.message))
    }
}
export function* sagaCheckUserSession() {
    yield takeLatest(CHECK_USER_SESSION, startCheckUserSession);
}


/* user sign out */

function* startUserSignout() {
    try {
        yield auth.signOut();
        yield put(sagaSignOutSuccess());
    }catch(e) {
        put(sagaSignOutFailed(e.message));
    }
}

export function* sagaUserSignOutStart() {
    yield takeLatest(SIGN_OUT_START, startUserSignout);
}


/* user sign up
        try {
     
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
 
            await createUser(user, { displayName });

            this.setState({
                displayName:'',
                email: '',
                password: '',
                passwordConfirm: ''
            });

            
        } catch(e) {
            console.error('Error when signup', e.message);
        }
*/

function* startUserSignup({ payload: { email, password, displayName }}) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user, { displayName });
    }catch(e) {
        put(sagaUserFailed(e.message));
    }
}

export function* sageUserSignUp() {
    yield takeLatest(SIGN_UP_START, startUserSignup);
}

export function* userSagas() {
    yield all([call(sagaGoogleUserStart), call(sagaEmailUserStart), call(sagaUserSignOutStart), call(sageUserSignUp)]);
}