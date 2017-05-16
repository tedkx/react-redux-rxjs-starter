import { APP_ACTION_TYPES as AT } from './App.actions'

export const defaultState = {
    authenticating: false,
    loading: false,
    user: null
}

const app = (state = defaultState, action) => {
    switch (action.type) {
        case AT.LOGIN:
            return Object.assign({}, state, { authenticating: true });
        case AT.LOGIN_SUCCESS:
            delete action.payload.password;
            return Object.assign({}, state, { authenticating: false, user: action.payload });
        case AT.LOGIN_FAIL:
            return Object.assign({}, state, { user: null });
        default:
            return state;
    }
}

export default app;