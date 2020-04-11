import { CREATE_CURRENT_USER, 
         SAGA_GOOGLE_USER_START, 
         SAGA_EMAIL_USER_START,
         SAGA_USER_SUCCESS,
         SAGA_USER_FAILED,
         CHECK_USER_SESSION,
         SIGN_OUT_FAILED,
         SIGN_OUT_START,
         SIGN_OUT_SUCCESS,
         SIGN_UP_START,
         SIGN_UP_SUCCESS,
         SIGN_UP_FAILED } from './type';

export const checkUserSession = () => ({
    type: CHECK_USER_SESSION
});

export const createCurrentUser = user => ({
    type: CREATE_CURRENT_USER,
    payload: user
});

export const sagaGoogleUserStart = () => ({
    type: SAGA_GOOGLE_USER_START
});

export const sagaUserSUCCESS = (data) => ({
    type: SAGA_USER_SUCCESS,
    payload: data
});

export const sagaUserFailed = (message) => ({
    type: SAGA_USER_FAILED,
    payload: message
});

export const sagaEmailUserStart = emailAndpassword => {

    return ({
        type: SAGA_EMAIL_USER_START,
        payload: emailAndpassword
    });
};

export const sagaSignOutStart = () => ({
    type: SIGN_OUT_START
});

export const sagaSignOutSuccess = () => ({
    type: SIGN_OUT_SUCCESS
});

export const sagaSignOutFailed = () => ({
    type: SIGN_OUT_FAILED
});

export const sagaSignUpStart = emailAndPassword => ({
    type: SIGN_UP_START,
    payload: emailAndPassword
});

export const sagaSignUpSuccess = user => ({
    type: SIGN_UP_SUCCESS,
    payload: user
});