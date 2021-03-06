import { DASHBOARD_ACTION_TYPES as AT } from './Dashboard.actions'

export const defaultState = {
    fetchingData: false,
    data: null
}

const dashboard = (state = defaultState, action) => {
    switch (action.type) {
        case AT.DATA_FETCH:
            return Object.assign({}, state, { fetchingData: true });
        case AT.DATA_FETCH_SUCCESS:
            delete action.payload.password;
            return Object.assign({}, state, { fetchingData: false, data: action.payload });
        case AT.DATA_FETCH_FAIL:
            return Object.assign({}, state, { fetchingData: false });
        default:
            return state;
    }
}

export default dashboard;