'use strict';

import StoreHelper from '../../lib/StoreHelper';

export const APP_ACTION_TYPES = {
    LOGIN: 'LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAIL: 'LOGIN_FAIL'
}

export const login = (username, password) => StoreHelper.createAction(APP_ACTION_TYPES.LOGIN, { username, password });