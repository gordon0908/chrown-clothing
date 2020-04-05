import { CREATE_CURRENT_USER } from './type';

export const createCurrentUser = user => ({
    type: CREATE_CURRENT_USER,
    payload: user
});
