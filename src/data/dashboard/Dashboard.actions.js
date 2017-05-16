'use strict';

import StoreHelper from '../../lib/StoreHelper';

export const DASHBOARD_ACTION_TYPES = {
    DATA_FETCH: 'DATA_FETCH',
    DATA_FETCH_SUCCESS: 'DATA_FETCH_SUCCESS',
    DATA_FETCH_FAIL: 'DATA_FETCH_FAIL'
}

export const fetchData = () => StoreHelper.createAction(DASHBOARD_ACTION_TYPES.DATA_FETCH);