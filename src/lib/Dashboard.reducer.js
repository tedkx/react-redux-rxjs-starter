import { DASHBOARD_ACTION_TYPES as AT } from './Dashboard.actions'

export const defaultState = {
    data: null,
    dataFetching: false,
    error: null
}

const dashboard = (state = defaultState, action) => {
    switch (action.type) {
        case AT.DATA_FETCH:
            return Object.assign({}, state, { dataFetching: true });
        case AT.DATA_FETCH_SUCCESS:
            return Object.assign({}, state, { dataFetching: false, data: action.payload });
        case AT.DATA_FETCH_FAIL:
            return Object.assign({}, state, { dataFetching: false, error: action.error });
        default:
            return state;
    }
}

export default dashboard;