import { Observable }   from 'rxjs'
import { combineEpics } from 'redux-observable';

import Api              from '../../lib/Api'
import StoreHelper      from '../../lib/StoreHelper'
import { DASHBOARD_ACTION_TYPES as AT }    
                        from './Dashboard.actions'

export const fetchDataEpic = (action$, store) => action$
    .ofType(AT.DATA_FETCH)
    .mergeMap(action => Api.fetchDashboardData()
            .map(content => StoreHelper.createAction(AT.DATA_FETCH_SUCCESS, content))
            .catch(e => StoreHelper.createAction(AT.DATA_FETCH_FAIL, null, e))
    )

export default combineEpics(
    fetchDataEpic
)